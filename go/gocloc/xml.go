/*******************************************************************************
 * Copyright (c) 2018 - Present VMware, Inc. All Rights Reserved.
 ******************************************************************************/

package gocloc

import (
	"encoding/xml"
	"fmt"

	"github.com/vmware-tanzu/cloud-suitability-analyzer/go/util"
)

type XMLTotalLanguages struct {
	SumFiles int32 `xml:"sum_files,attr"`
	Code     int32 `xml:"code,attr"`
	Comment  int32 `xml:"comment,attr"`
	Blank    int32 `xml:"blank,attr"`
}
type XMLResultLanguages struct {
	Languages []util.ClocLanguage `xml:"language"`
	Total     XMLTotalLanguages   `xml:"total"`
}

type XMLTotalFiles struct {
	Code    int32 `xml:"code,attr"`
	Comment int32 `xml:"comment,attr"`
	Blank   int32 `xml:"blank,attr"`
}
type XMLResultFiles struct {
	Files []ClocFile    `xml:"file"`
	Total XMLTotalFiles `xml:"total"`
}

type XMLResult struct {
	XMLName      xml.Name            `xml:"results"`
	XMLFiles     *XMLResultFiles     `xml:"files,omitempty"`
	XMLLanguages *XMLResultLanguages `xml:"languages,omitempty"`
}

func (x *XMLResult) Encode() {
	if output, err := xml.MarshalIndent(x, "", "  "); err == nil {
		fmt.Printf(xml.Header)
		fmt.Println(string(output))
	}
}
