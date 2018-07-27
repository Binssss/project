package com.yunzainfo.pitcher.plugin.project.controller.establishProject;

import com.yunzainfo.pitcher.common.constants.WebConstants;
import com.yunzainfo.pitcher.common.vo.*;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.ProjectFile;
import com.yunzainfo.pitcher.plugin.project.service.ProjectFileService;
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
 * @Decription: 项目立项
 * @Auther: bin
 * @Date: 2018/3/5
 * */
@Controller
@RequestMapping("/establish")
public class ProjectEstablishController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProjectEstablishController.class);

    @Autowired
    private ProjectService projectService;
    @Autowired
    private ProjectFileService projectFileService;

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
        return "views/establish/establish";

    }

    /**
     * @Description   查询所有并分页
     *
     * @param pager    the pager
     * @param request  the request
     * @param session  the session
     * @param field    the field
     * @param value    the value
     * @param projectName the project Name
     * @return 分页数据
     */
    @RequestMapping(value = "/queryListForPage", method = RequestMethod.POST)
    @ResponseBody
    public Object queryListForPage(ExtPager pager, HttpServletRequest request,
                                   HttpSession session,String field, String value, String projectName) {

        try {
            Criteria criteria = new Criteria();
            /** 设置分页信息 */
            if (pager.getLimit() != null && pager.getStart() != null) {
                criteria.setStart(pager.getStart());
                criteria.setLimit(pager.getLimit());
                criteria.setOracleStart(pager.getStart());
                criteria.setOracleEnd(pager.getStart() + pager.getLimit());
            }

            if (StringUtils.isNotEmpty(value)) {
                if (field.equals("projectName")) {
                    criteria.put("projectName", value);
                }
                if (field.equals("type")) {
                    criteria.put("type", value);
                }

            }
            if (StringUtils.isNotEmpty(projectName)) {
                criteria.put("projectName", projectName);
            }

            List<Project> list = projectService.queryListForPage(criteria);
            int total = projectService.getTotalCount(criteria);
            return new ExtGridReturn(total, list);
        } catch (Exception e) {
            e.printStackTrace();
            return new ExceptionReturn(e);
        }

    }

    /**
     * @Description 查询项目树
     *
     * @param response the response
     * @param request    the request
     * @param session    the session
     * @return the List
     */
    @RequestMapping(value = "/getProjectTree", method = RequestMethod.POST)
    @ResponseBody
    public List<Tree> getProjectTree(HttpServletRequest request, HttpSession session, HttpServletResponse response){
        return projectService.getProjectTree();
    }

    /**
     * @Description 添加
     *
     * @param project the project
     * @param request    the request
     * @param session    the session
     * @return the ExtReturn
     */
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    @ResponseBody
    public void insert(Project project/*, String fileDesc*/, HttpServletRequest request, HttpSession session, HttpServletResponse response) {
        System.err.println("进入插入---------------------------");
        PrintWriter out = null;
        /*MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        //获取上传提交过来的文件
        MultipartFile multipartFile = multipartRequest.getFile("file");*/
        try {
            /** 获取当前用户 */
            BaseUsers user = (BaseUsers) session.getAttribute(
                    WebConstants.CURRENT_USER);
            project.setLeader(user);
            String id = IDUtils.genItemId() + "";
            project.setId(id);
            int insert = projectService.insert(project);

            //上传文件
            //项目路径
          /*  String savePath = request.getSession().getServletContext().getRealPath("/");
            savePath = savePath.substring(0,savePath.lastIndexOf("webapp") - 1);
            //root绝对路径
            savePath = (savePath + "/webapps/ROOT/wwwfile/projectfile/").replace("\\","/");
            //生成文件
            File file = CabinetFileUtils.upload(multipartFile,savePath);
            String fileName = multipartFile.getOriginalFilename();
            ProjectFile projectFile = new ProjectFile();
            projectFile.setFileDesc(fileDesc);
            projectFile.setId(IDUtils.genItemId() + "");
            projectFile.setFileName(fileName);
            projectFile.setUploadUser(user.getRealName());
            projectFile.setProjectName(project.getProjectName());
            projectFile.setFileData(file.getAbsolutePath());
            int flag = projectFileService.insert(projectFile);*/

            String msg = "";
            if (insert > 0 ) {
                msg = "{\"success\":true,\"msg\":\"添加成功\"}";
            } else {
                msg = "{\"failure\":true,\"msg\":\"添加失败\"}";
            }
            response.setContentType("text/html;charset=utf-8;");
            out = response.getWriter();
            out.write(msg);
        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error("添加信息出错", e);
        }finally {
            if(out != null){
                out.flush();
                out.close();
            }
        }
    }













}
