package com.yunzainfo.pitcher.plugin.project.test;

import com.yunzainfo.pitcher.common.vo.Criteria;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
@Controller
public class ProjectController {

    private ProjectService projectService;

    @RequestMapping("/")
    public String index(){
        return "index";
    }

    @RequestMapping("/listForPage")
    public List<Project> listForPage(Criteria criteria) {
        return projectService.listForPage(criteria);
    }

    @RequestMapping("/getById")
    public Project getById(Integer id){
        return projectService.getById(id);
    }

    @RequestMapping("/insert")
    public Integer insert(Project project){
        return projectService.insert(project);
    }

    @RequestMapping("/update")
    public Integer update(Project project){
        return projectService.update(project);
    }

    @RequestMapping("/delete")
    public Integer delete(Integer id){
        return projectService.delete(id);
    }

}
