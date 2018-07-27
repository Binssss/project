package com.yunzainfo.pitcher.plugin.project.controller.buildProject;

import com.yunzainfo.pitcher.common.constants.WebConstants;
import com.yunzainfo.pitcher.common.vo.*;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievement;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectAchievementFile;
import com.yunzainfo.pitcher.plugin.project.service.ProjectAchievementFileService;
import com.yunzainfo.pitcher.plugin.project.service.ProjectAchievementService;
import com.yunzainfo.pitcher.plugin.project.service.ProjectService;
import com.yunzainfo.pitcher.plugin.project.utils.CabinetFileUtils;
import com.yunzainfo.pitcher.plugin.project.utils.IDUtils;
import com.yunzainfo.pitcher.privilege.entity.BaseUsers;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.PrintWriter;
import java.util.List;

/**
 * The type Project initiation controller
 * @Decription: 项目成果
 * @Auther: bin
 * @Date: 2018/3/5
 * */
@Controller
@RequestMapping("/achievement")
public class ProjectAchievementController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProjectAchievementController.class);

    @Autowired
    private ProjectAchievementService projectAchievementService;
    @Autowired
    private ProjectAchievementFileService projectAchievementFileService;
    @Autowired
    private ProjectService projectService;

    /**
     * 进入主页
     * @param request the request
     * @param session the session
     * @param model   the model
     * @return jsp页面路径
     */
    @RequestMapping(method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpSession session,
                        Model model) {
        return "views/achievement/achievement";

    }

    /**
     * @Description   查询所有并分页
     *
     * @param pager    the pager
     * @param request  the request
     * @param session  the session
     * @param field    the field
     * @param projectId    the projectId
     * @return 分页数据
     */
    @RequestMapping(value = "/queryListForPage", method = RequestMethod.POST)
    @ResponseBody
    public Object queryListForPage(ExtPager pager, HttpServletRequest request,
                                   HttpSession session, String value, String field, String projectId) {

        try {
            Criteria criteria = new Criteria();
            /** 设置分页信息 */
            if (pager.getLimit() != null && pager.getStart() != null) {
                criteria.setStart(pager.getStart());
                criteria.setLimit(pager.getLimit());
                criteria.setOracleStart(pager.getStart());
                criteria.setOracleEnd(pager.getStart() + pager.getLimit());
            }

            if (StringUtils.isNotEmpty(field)) {
                if (field.equals("name")) {
                    criteria.put("name", value);
                }
                /*if (field.equals("leader")) {
                    criteria.put("leader", value);
                }*/

            }
            if (StringUtils.isNotEmpty(projectId)) {
                criteria.put("projectId", projectId);
            }else{
                criteria.put("projectId", "---");
            }
            System.err.println("---------iD--------" + projectId);
            List<ProjectAchievement> list = projectAchievementService.queryListForPage(criteria);
            int total = projectAchievementService.getTotalCount(criteria);
            return new ExtGridReturn(total, list);
        } catch (Exception e) {
            e.printStackTrace();
            return new ExceptionReturn(e);
        }

    }


    /**
     * @Description 添加
     *
     * @param request    the request
     * @param session    the session
     * @return the ExtReturn
     */
    @RequestMapping(value = "/insert", method = RequestMethod.POST,produces = "text/html;charset=utf-8")
    @ResponseBody
    public void insert(ProjectAchievement projectAchievement, String fileDesc,String projectId, HttpServletRequest request, HttpSession session, HttpServletResponse response) {
        ExtReturn result = null;
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        //获取上传提交过来的文件
        MultipartFile multipartFile = multipartRequest.getFile("file");
        PrintWriter out = null;
        try {
            /** 获取当前用户 */
            BaseUsers user = (BaseUsers) session.getAttribute(
                    WebConstants.CURRENT_USER);
            Project project = projectService.queryById(projectId);
            projectAchievement.setProjectName(project);
            String id = IDUtils.genItemId() + "";
            projectAchievement.setId(id);
            int insert = projectAchievementService.insert(projectAchievement);

            //上传文件
            //项目路径
            String savePath = request.getSession().getServletContext().getRealPath("/");
            savePath = savePath.substring(0,savePath.lastIndexOf("webapp") - 1);
            //root绝对路径
            savePath = (savePath + "/webapps/ROOT/wwwfile/projectachievementfile/").replace("\\","/");
            //生成文件
            File file = CabinetFileUtils.upload(multipartFile,savePath);
            String fileName = multipartFile.getOriginalFilename();
            ProjectAchievementFile projectAchievementFile = new ProjectAchievementFile();
            projectAchievementFile.setFileDesc(fileDesc);
            projectAchievementFile.setId(IDUtils.genItemId() + "");
            projectAchievementFile.setFileName(fileName);
            projectAchievementFile.setUploadUser(user.getAccount());
            projectAchievementFile.setProjectAchievement(projectAchievement.getId());
            projectAchievementFile.setFileData(file.getAbsolutePath());
            int flag = projectAchievementFileService.insert(projectAchievementFile);

            String msg = "";
            if (insert > 0 && flag > 0) {
                msg = "{\"success\":true,\"msg\":\"添加成功\"}";
            } else {
                msg = "{\"failure\":true,\"msg\":\"添加失败\"}";
            }
            response.setContentType("text/html;charset=utf-8;");
            out = response.getWriter();
            out.write(msg);

        } catch (Exception e) {
            LOGGER.error("添加信息出错", e);
        }finally {
            if (out != null) {
                out.flush();
                out.close();
            }
        }
    }

    /**
     * 删除
     * @param id the id
     * @return the ExtReturn
     */
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public ExtReturn delete(String id) {
        ExtReturn result = null;
        try {
            int delete = projectAchievementService.delete(id);
            int flag = projectAchievementFileService.delete(id);
            if (delete == 1 && flag > 0) {
                result = new ExtReturn(true, "删除成功");
            } else {
                result = new ExtReturn(false, " 删除失败");
            }
            return result;
        } catch (Exception e) {
            LOGGER.error("删除信息出错", e);
            result = new ExtReturn(e);
            return result;
        }
    }

    /**
     * 修改
     * @param request         the request
     * @return the ExtReturn
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    @ResponseBody
    public void update(ProjectAchievement projectAchievement, HttpServletRequest request,String fileDesc, HttpServletResponse response, HttpSession session) {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		//获取上传提交过来的文件
		MultipartFile multipartFile = multipartRequest.getFile("file");
        PrintWriter out = null;
        /** 获取当前用户 */
        BaseUsers user = (BaseUsers) session.getAttribute(
                WebConstants.CURRENT_USER);
        try {
            int update = projectAchievementService.update(projectAchievement);

            //上传文件
            //项目路径
            String savePath = request.getSession().getServletContext().getRealPath("/");
            savePath = savePath.substring(0,savePath.lastIndexOf("webapp") - 1);
            //root绝对路径
            savePath = (savePath + "/webapps/ROOT/wwwfile/projectachievementfile/").replace("\\","/");
            //生成文件
            File file = CabinetFileUtils.upload(multipartFile,savePath);
            String fileName = multipartFile.getOriginalFilename();
            ProjectAchievementFile projectAchievementFile = new ProjectAchievementFile();
            projectAchievementFile.setFileDesc(fileDesc);
            projectAchievementFile.setFileName(fileName);
            projectAchievementFile.setUploadUser(user.getAccount());
            projectAchievementFile.setFileData(file.getAbsolutePath());
            projectAchievementFile.setProjectAchievement(projectAchievement.getId());
            int flag = projectAchievementFileService.update(projectAchievementFile);
            String msg = "";
            if (update > 0 && flag > 0) {
                msg = "{\"success\":true,\"msg\":\"修改成功\"}";
            } else {
                msg = "{\"failure\":true,\"msg\":\"修改失败\"}";
            }
            response.setContentType("text/html;charset=utf-8;");
            out = response.getWriter();
            out.write(msg);
        } catch (Exception e) {
            LOGGER.error("修改信息出错", e);
        }finally {
            if (out != null) {
                out.flush();
                out.close();
            }
        }
    }

}
