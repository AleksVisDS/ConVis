var db;function Dashboard(){this.main=body.append("div").attr("id","dashboard");this.width=function(){return parseInt(body.style("width").replace("px",""))};this.height=function(){return parseInt(body.style("height").replace("px",""))};this.leftPanel=this.main.append("div").attr("id","leftpanel").style("position","absolute").style("display","block");this.centerPanel=this.main.append("div").attr("id","centerpanel").style("position","absolute").style("display","block");this.rightPanel=this.main.append("div").attr("id","rightpanel").style("position","absolute").style("display","block").style("float","right");this.leftPanelRelativeWidth=0.2;this.centerPanelRelativeWidth=0.6;this.rightPanelRelativeWidth=0.2;this.leftPanelAbsWidth=function(){return this.leftPanelRelativeWidth*this.width()};this.centerPanelAbsWidth=function(){return this.centerPanelRelativeWidth*this.width()};this.rightPanelAbsWidth=function(){return this.rightPanelRelativeWidth*this.width()};this.heatmapPanel=this.leftPanel.append("div");this.heatmapControlPanel=this.leftPanel.append("div");this.stackedbarsPanel=this.centerPanel;this.scatterplotPanel=this.rightPanel.append("div");this.scatterplotControlPanel=this.rightPanel.append("div");this.classDetailBoxPanel=this.rightPanel.append("div").style("overflow-y","auto").style("overflow-x","hidden");this.updateSize=function(){this.leftPanel.style("width",this.leftPanelAbsWidth()+"px").style("left","0px").style("height",this.height()+"px");this.centerPanel.attr("id","centerpanel").style("width",this.centerPanelAbsWidth()+"px").style("left",this.leftPanelAbsWidth()+"px").style("height",this.height()+"px");this.rightPanel.style("width",this.rightPanelAbsWidth()+"px").style("left",this.leftPanelAbsWidth()+this.centerPanelAbsWidth()+"px").style("height",this.height()+"px");this.classDetailBoxPanel.attr("id","classdetailboxpanel").style("height",function(){return(db.height()-db.rightPanelAbsWidth()-5-parseInt(db.scatterplotControlPanel.style("height").replace("px","")))+"px"})}}function drawDashboard(){body.select("#uploader").style("visibility","hidden");db=new Dashboard();initClassDetailBox(db.classDetailBoxPanel,0);drawHeatmap(db.heatmapPanel,db.heatmapControlPanel);drawScatterPlot(db.scatterplotPanel,db.scatterplotControlPanel);drawStackedBarsPanel(db.stackedbarsPanel);window.addEventListener("resize",function(){updateDashboard()});updateDashboard()}function updateDashboard(a){db.updateSize();updateHeatmap(db.leftPanelAbsWidth(),a);updateScatterPlot(db.rightPanelAbsWidth(),a);updateStackedBarsPanel(db.centerPanelAbsWidth(),a);updateClassDetailBox()};