package com.yunzainfo.pitcher.plugin.project.service.impl;

import com.yunzainfo.pitcher.common.vo.Criteria;
import com.yunzainfo.pitcher.plugin.project.dao.SchemeMapper;
import com.yunzainfo.pitcher.plugin.project.entity.Scheme;
import com.yunzainfo.pitcher.plugin.project.service.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * The interface Book detail mapper.
 *
 * @Description: 建设方案
 * @Auther: Mr.Bin
 * @create: 2018-06-05 16:22
 */
@Service
public class SchemeServiceImpl implements SchemeService {

    @Autowired
    private SchemeMapper schemeMapper;

    /**
     * 查询所有并分页
     *
     * @param criteria
     **/
    @Override
    public List<Scheme> queryListForPage(Criteria criteria) {
        return schemeMapper.queryListForPage(criteria);
    }

    /**
     * 查询总数据条数
     *
     * @param criteria
     **/
    @Override
    public int getTotalCount(Criteria criteria) {
        return schemeMapper.getTotalCount(criteria);
    }

    /**
     * 插入
     *
     * @param scheme
     * @return the int
     */
    @Override
    public int insert(Scheme scheme) {
        return schemeMapper.insert(scheme);
    }

    /**
     * 修改
     *
     * @param scheme
     * @return the int
     */
    @Override
    public int update(Scheme scheme) {
        return schemeMapper.update(scheme);
    }

    /**
     * 删除
     *
     * @param id the id
     * @return the int
     */
    @Override
    public int delete(int id) {
        return schemeMapper.delete(id);
    }

    /**
     * 根据Id查
     *
     * @param id the id
     * @return the scheme
     */
    @Override
    public Scheme queryById(String id) {
        return schemeMapper.queryById(id);
    }
}
