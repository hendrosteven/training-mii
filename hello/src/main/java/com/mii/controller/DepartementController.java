/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mii.controller;

import com.mii.entity.Departement;
import com.mii.services.DepartementService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hendro Steven
 */
@RestController
@RequestMapping("/api/departement")
public class DepartementController {

    @Autowired
    private DepartementService departementService;

    @RequestMapping(method = RequestMethod.POST)
    public Departement insertNewDepartement(@RequestBody Departement dep) {
        return departementService.insertNewDepartement(dep);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Departement> findAllDepartement() {
        return departementService.findAllDepartement();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Departement findDepartementById(@PathVariable("id") Long id) {
        return departementService.findById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Departement updateDepartement(@RequestBody Departement departement) {
        return departementService.updateDepartement(departement);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean removeDepartementById(@PathVariable("id") Long id) {
        return departementService.removeDepartement(id);
    }
}
