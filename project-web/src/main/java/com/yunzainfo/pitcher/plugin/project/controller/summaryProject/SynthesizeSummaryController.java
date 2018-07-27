package com.yunzainfo.pitcher.plugin.project.controller.summaryProject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 *
 * @Description: 综合项目总结报告
 * @Auther: Mr.Bin
 * @create: 2018-04-23 14:34
 */
@Controller
@RequestMapping("/synthesizeSummary")
public class SynthesizeSummaryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SynthesizeSummaryController.class);

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
        return "views/synthesizeSummary/synthesizeSummary";

    }
}
