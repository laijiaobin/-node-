import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 社团活动
const ShetuanhuodongModel = sequelize.define('ShetuanhuodongModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shetuanmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社团名称'
	},
	shezhangxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长姓名'
	},
	huodongmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动名称'
	},
	huodongtupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动图片'
	},
	kaishishijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('kaishishijian')).format('YYYY-MM-DD')
        },
		comment: '开始时间'
	},
	jieshushijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('jieshushijian')).format('YYYY-MM-DD')
        },
		comment: '结束时间'
	},
	huodongdidian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动地点'
	},
	huodongxiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '活动详情'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'shetuanhuodong'
})

export default ShetuanhuodongModel
