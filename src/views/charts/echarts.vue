<template comments>
  <div id="main" class="echarts">
    <!-- ssssssssssss -->
  </div>
</template>

<script>
export default {
  name: '',
  comments: true,
  data() {
    return {

    }
  },
  mounted() {
    setTimeout(() => {
      this.addChart()
    }, 2000)
  },
  methods: {
    addChart() {
      var myChart = this.$echart.init(document.getElementById('main'))
      var data = [
        [12, 23, 43],
        [43, 545, 65],
        [92, 23, 33]
      ]
      myChart.setOption({
        tooltip: {
          tigger: 'item',
          tiggerOn: 'hover'
          // formatter: (params) => {
          //   console.log(params)
          //   // return params
          // }
        },
        xAxis3D: {
          name: 'x',
          type: 'value'
          //                min: 'dataMin',//获取数据中的最值
          //                max: 'dataMax'
        },
        yAxis3D: {
          name: 'y',
          type: 'value'
          //                min: 'dataMin',
          //                max: 'dataMax'
        },
        zAxis3D: {
          name: 'z',
          type: 'value'
          //                min: 'dataMin',
          //                max: 'dataMax'
        },
        grid3D: {
          axisLine: {
            lineStyle: {
              color: '#000'// 轴线颜色
            }
          },
          axisPointer: {
            lineStyle: {
              color: '#f00'// 坐标轴指示线
            },
            show: false// 不坐标轴指示线
          },
          viewControl: {
            //                     autoRotate: true,//旋转展示
            //                     projection: 'orthographic'
            beta: 10
          },
          boxWidth: 200,
          boxHeight: 100,
          boxDepth: 100,
          top: -100
        },

        series: [{
          type: 'scatter3D',
          hoverAnimation: true,
          dimensions: ['a', 'b', 'c'// 显示框信息
          ],
          //                encode: {
          // //                    x: [3, 1, 5],      // 表示维度 3、1、5 映射到 x 轴。
          // //                    y: 2,              // 表示维度 2 映射到 y 轴。
          //                    tooltip:['a','c','b'], // 表示维度 3、2、4 会在 tooltip 中显示。
          //                    label: 'a'           // 表示 label 使用维度 3。
          //                },
          data: data,
          symbolSize: 20, // 点的大小
          // symbol: 'triangle',
          itemStyle: {
            // borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.8)'// 边框样式
          },
          emphasis: {
            itemStyle: {
              color: '#ccc'// 高亮
            }
          }
          // itemStyle: {
          //   color: '#f00'
          // }
        }],
        backgroundColor: '#fff'
      })
    }

  }
}
</script>

<style lang="" scoped>
  .echarts{
    width:100%;
    height:800px;
    padding: 12px;
  }
  .login_content {
    position: relative;
    text-align: center;
  }
  h1{
    font: 18px PingFang-SC-Bold;
    color: #FF6600;
  }
/* CSS伪类用法 */
  .login_content h1:after, .login_content h1:before {
    background: #FF6600;
    content: "";
    top: 8px;
    height: 2px;
    position: absolute;
    width: 47%;
  }
  .login_content h1:before {
    left: 4.5px;
  }
  .login_content h1:after {
    right: 4.5px;
  }
  .list{
      float: left;
      margin: 1px;
    }
  .list:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid gray;
  }
</style>
