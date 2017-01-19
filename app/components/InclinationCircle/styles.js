import common from '../../styles/common'

export default {
  radius: 100,
  strokeWidth: 2,

  bottleLine: {
    stroke: common.colors.info
  },

  neutralInclination: {
    background: 'rgba(128,128,128, .1)',
    stroke: 'rgb(128,128,128)'
  },
  wrongInclination: {
    background: 'rgba(255,152,0, .1)',
    stroke: common.colors.warning
  },
  correctInclination: {
    background: 'rgba(139,195,74, .1)',
    stroke: common.colors.success
  }
};