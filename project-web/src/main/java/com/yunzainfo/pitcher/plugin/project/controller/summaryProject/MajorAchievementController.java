package com.yunzainfo.pitcher.plugin.project.controller.summaryProject;

import com.yunzainfo.pitcher.plugin.project.controller.buildProject.QuantitativeIndexController;
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
 * @Description: 专业标志性成果完成情况
 * @Auther: Mr.Bin
 * @create: 2018-06-01 08:51
 */
@Controller
@RequestMapping("/majorAchievement")
public class MajorAchievementController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MajorAchievementController.class);

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
        return "views/majorAchievement/majorAchievement";

    }
}
