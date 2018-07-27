package com.yunzainfo.pitcher.plugin.project.controller.establishProject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * The interface Book detail mapper.
 *
 * @Description: 分析报告
 * @Auther: Mr.Bin
 * @create: 2018-05-29 10:36
 */
@Controller
@RequestMapping("/analysisReport")
public class AnalysisReportController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AnalysisReportController.class);

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
        return "views/analysisReport/analysisReport";

    }
}
