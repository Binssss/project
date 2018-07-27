package com.yunzainfo.pitcher.plugin.project.controller.buildProject;

import com.yunzainfo.pitcher.common.vo.*;
import com.yunzainfo.pitcher.plugin.project.entity.Scheme;
import com.yunzainfo.pitcher.plugin.project.service.SchemeService;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 审核完善高水平专业建设任务书
 * @Auther: Mr.Bin
 * @create: 2018-04-23 10:50
 */
@Controller
@RequestMapping("/checkChildProjectScheme")
public class CheckChildProjectSchemeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CheckChildProjectSchemeController.class);

    @Autowired
    private SchemeService schemeService;

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
        return "views/checkChildProjectScheme/checkChildProjectScheme";

    }

    /**
     * @Description   查询所有并分页
     *
     * @param pager    the pager
     * @param request  the request
     * @param session  the session
     * @param field    the field
     * @param value    the value
     * @return 分页数据
     */
    @RequestMapping(value = "/queryListForPage", method = RequestMethod.POST)
    @ResponseBody
    public Object queryListForPage(ExtPager pager, HttpServletRequest request,
                                   HttpSession session, String field, String value, String code) {
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
                if (field.equals("fileName")) {
                    criteria.put("fileName", value);
                }
                if (field.equals("fileType")) {
                    criteria.put("fileType", value);
                }
            }
            if (StringUtils.isNotEmpty(code)) {
                criteria.put("code", code);
            }

            List<Scheme> list = schemeService.queryListForPage(criteria);
            int total = schemeService.getTotalCount(criteria);
            return new ExtGridReturn(total, list);
        } catch (Exception e) {
            e.printStackTrace();
            return new ExceptionReturn(e);
        }

    }

    /**
     * @Description 修改
     *
     * @param request    the request
     * @return the ExtReturn
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    @ResponseBody
    public void update(Scheme scheme, HttpServletRequest request, HttpServletResponse response) {
        PrintWriter out = null;
        try {

            int update = schemeService.update(scheme);
            String msg = "";
            if (update > 0) {
                msg = "{\"success\":true,\"msg\":\"审核成功\"}";
            } else {
                msg = "{\"failure\":true,\"msg\":\"审核失败\"}";
            }
            response.setContentType("text/html;charset=utf-8;");
            out = response.getWriter();
            out.write(msg);
        } catch (Exception e) {
            LOGGER.error("审核信息出错", e);
        }finally {
            if (out != null) {
                out.flush();
                out.close();
            }
        }
    }


}
