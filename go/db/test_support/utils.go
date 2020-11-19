/*******************************************************************************
 * Copyright (c) 2018 - Present VMWare, Inc. All Rights Reserved.
 * SPDX-License-Identifier: BSD-2
 ******************************************************************************/

package db_test_support

import (
	"github.com/jinzhu/gorm"
	"github.com/vmware-tanzu/cloud-suitability-analyzer/go/db"
	"github.com/vmware-tanzu/cloud-suitability-analyzer/go/model"
	"github.com/vmware-tanzu/cloud-suitability-analyzer/go/util"
	"io/ioutil"
	"log"
	"time"
)

func OpenTestDb() (run *model.Run, tempDir string, database *gorm.DB, err error) {

	dbType := util.SQLITE
	util.DB = &dbType
	tempDir, err = ioutil.TempDir(".", "sqlite")
	if err != nil {
		log.Fatal(err)
	}

	util.DbDir = &tempDir
	dbName := "appfoundry.db"

	util.DBName = &dbName
	startTime, _ := time.Parse(time.RFC3339, "2021-01-01T00:00:00Z")
	run = &model.Run{
		StartTime: startTime,
	}

	database = db.OpenDB(run)

	return
}
