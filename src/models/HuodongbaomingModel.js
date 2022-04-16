import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 活动报名
const HuodongbaomingModel = sequelize.define('HuodongbaomingModel', {
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
	huodongdidian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动地点'
	},
	xueshengxuehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学生学号'
	},
	xueshengxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学生姓名'
	},
	zhuanye: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '专业'
	},
	yuanxi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '院系'
	},
	baomingshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('baomingshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '报名时间'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
	},
	thumbsupnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '赞'
	},
	crazilynum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '踩'
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
	tableName: 'huodongbaoming'
})

export default HuodongbaomingModel
