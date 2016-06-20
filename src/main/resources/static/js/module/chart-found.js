/**
 * Created by Administrator on 2015/9/13.
 */
angular.module('chart.fund', ['highcharts-ng'])

    .controller('ChartCtrl', ['$scope',
        function ($scope) {
            $scope.chartConfig = {
                options: {
                    chart: {
                        type: 'line'
                    }
                },
                title: {
                    text: '定投收益折线图',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: windhc.com',
                    x: -20
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: '人民币(￥)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }],
                    tickInterval: 100000
                },
                tooltip: {
                    valuePrefix: '$',
                    valueSuffix: '￥'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: []
            };

            $scope.investmentData = [];

            var nowDate = new Date();
            var nowYear = nowDate.getFullYear();
            $scope.chart = {};
            $scope.chart.money = 1000;
            $scope.chart.years = 30;
            $scope.chart.interest = 8;

            var setData = function (line) {
                var interest = $scope.chart.interest/100;
                var lineData = {
                    name: $scope.chart.interest+'%',
                    data: []
                };
                var m;
                for(var i=1;i<=$scope.chart.years; i++) {
                    $scope.chartConfig.xAxis.categories.push(nowYear+i);

                    //m=12a(1+x)[-1+(1+x)^n]/x    m：预期收益(本金+收益)   a：每月定投金额   x：一年收益率   n：定投期数(公式中为n次方)
                    m = 12*$scope.chart.money * (1+interest) * ((-1+Math.pow((1+interest), i))/interest);
                    m = m+"";
                    m = m.substr(0, m.indexOf('.')+3);
                    m=parseFloat(m);
                    lineData.data.push(m);
                }

                if(line == 0) {
                    $scope.chartConfig.series[0]=lineData;
                    $scope.investmentData[0] = {
                        interest: $scope.chart.interest+'%',
                        years: $scope.chart.years,
                        principal: 12*$scope.chart.money*$scope.chart.years,
                        income: m
                    };
                    return;
                }
                $scope.chartConfig.series.push(lineData);
                $scope.investmentData.push({
                    interest: $scope.chart.interest+'%',
                    years: $scope.chart.years,
                    principal: 12*$scope.chart.money*$scope.chart.years,
                    income: m
                });
            };

            setData(0);

            $scope.clickBtn = function () {
                $scope.chartConfig.xAxis.categories=[];
                $scope.chartConfig.series[0].data=[];
                setData(0);
            };

            $scope.addLine = function () {
                setData($scope.chartConfig.series.length);
            };

            $scope.deleteLastLine = function () {
                if($scope.chartConfig.series.length==1) {
                    return;
                }
                $scope.chartConfig.series.splice($scope.chartConfig.series.length-1, 1);
                $scope.investmentData.splice($scope.investmentData.length-1, 1);
            };
            $scope.deleteLine = function (index) {
                console.log(index);
                if($scope.chartConfig.series.length==1) {
                    return;
                }
                $scope.chartConfig.series.splice(index, 1);
                $scope.investmentData.splice(index, 1);
            }
        }
    ]);
