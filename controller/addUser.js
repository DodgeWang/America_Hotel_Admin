$(function() {

})

function addHighSchool() {
    var boxDom = '<div class="row-fluid">\
          <div class="widget widget-padding span12">\
            <div class="widget-header">\
              <i class="icon-list-alt"></i><h5>Education（High School）</h5>\
              <div class="widget-buttons">\
                  <a data-title="Add" onclick="addHighSchool()"><i class="icon-plus"></i></a>\
              </div>\
            </div>\
            <div class="widget-body">\
              <div class="widget-forms clearfix">\
                <form class="form-horizontal">\
                  <div class="control-group">\
                    <label class="control-label">School</label>\
                    <div class="controls">\
                      <input class="span7" type="text">\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Mailing Address</label>\
                    <div class="controls">\
                      <input class="span7 tip" type="text">\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Years Completed</label>\
                    <div class="controls">\
                      <div class="input-append date span5 datepicker datepicker-basic" data-date="12-02-2012" data-date-format="dd-mm-yyyy">\
                          <input size="16" type="text" value="12-02-2012">\
                          <span class="add-on"><i class="icon-th"></i></span>\
                        </div>\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Major</label>\
                    <div class="controls">\
                      <input class="span7 tip" type="text">\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Degree or Diploma</label>\
                    <div class="controls">\
                      <input class="span7 tip" type="text">\
                    </div>\
                  </div>\
                </form>\
              </div>\
            </div>\
          </div>\
        </div>'
    var highSchoolBox = $('#highSchoolBox').find('.row-fluid');
    $(highSchoolBox[highSchoolBox.length - 1]).after(boxDom);
}




function addCollegeSchool() {
    var boxDom = '<div class="row-fluid">\
          <div class="widget widget-padding span12">\
            <div class="widget-header">\
              <i class="icon-list-alt"></i><h5>Education（High School）</h5>\
              <div class="widget-buttons">\
                  <a data-title="Add" onclick="addHighSchool()"><i class="icon-plus"></i></a>\
              </div>\
            </div>\
            <div class="widget-body">\
              <div class="widget-forms clearfix">\
                <form class="form-horizontal">\
                  <div class="control-group">\
                    <label class="control-label">School</label>\
                    <div class="controls">\
                      <input class="span7" type="text">\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Mailing Address</label>\
                    <div class="controls">\
                      <input class="span7 tip" type="text">\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Years Completed</label>\
                    <div class="controls">\
                      <div class="input-append date span5 datepicker datepicker-basic" data-date="12-02-2012" data-date-format="dd-mm-yyyy">\
                          <input size="16" type="text" value="12-02-2012">\
                          <span class="add-on"><i class="icon-th"></i></span>\
                        </div>\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Major</label>\
                    <div class="controls">\
                      <input class="span7 tip" type="text">\
                    </div>\
                  </div>\
                  <div class="control-group">\
                    <label class="control-label">Degree or Diploma</label>\
                    <div class="controls">\
                      <input class="span7 tip" type="text">\
                    </div>\
                  </div>\
                </form>\
              </div>\
            </div>\
          </div>\
        </div>'
    var highSchoolBox = $('#highSchoolBox').find('.row-fluid');
    $(highSchoolBox[highSchoolBox.length - 1]).after(boxDom);
}