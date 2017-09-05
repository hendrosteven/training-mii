/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mii.services;

import com.mii.entity.Departement;
import com.mii.repo.DepartementRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Hendro Steven
 */
@Service("departementService")
@Transactional
public class DepartementService {

    @Autowired
    private DepartementRepo repo;

    public Departement insertNewDepartement(Departement dep) {
        return repo.save(dep);
    }

    public List<Departement> findAllDepartement() {
        return IteratorUtils.toList(repo.findAll().iterator());
    }

    public Departement findById(Long id) {
        return repo.findOne(id);
    }

    public Departement updateDepartement(Departement dep) {
        return repo.save(dep);
    }

    public boolean removeDepartement(Long id) {
        repo.delete(id);
        return true;
    }
}
