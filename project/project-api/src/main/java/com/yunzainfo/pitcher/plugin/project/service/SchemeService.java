package com.yunzainfo.pitcher.plugin.project.service;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.common.vo.Tree;
import com.yunzainfo.pitcher.plugin.project.entity.Project;
import com.yunzainfo.pitcher.plugin.project.entity.Scheme;

import java.util.List;

/**
 * The interface scheme mapper.
 *
 * @Description: 建设方案
 * @Auther: Mr.Bin
 * @create: 2018-03-26 14:57
 */
public interface SchemeService {

    /** 查询所有并分页 **/
    List<Scheme> queryListForPage(Criteria criteria);

    /** 查询总数据条数 **/
    int  getTotalCount(Criteria criteria);

    /**
     * 插入
     * @param scheme
     * @return the int
     */
    int insert(Scheme scheme);

    /**
     * 修改
     * @param scheme
     * @return the int
     */
    int update(Scheme scheme);

    /**
     * 删除
     * @param id the id
     * @return the int
     */
    int  delete(int id);

    /**
     * 根据Id查
     * @param id the id
     * @return the scheme
     */
    Scheme queryById(String id);
}
