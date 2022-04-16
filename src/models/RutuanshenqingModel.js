import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 入团申请
const RutuanshenqingModel = sequelize.define('RutuanshenqingModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	biaoti: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '标题'
	},
	shezhangxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长姓名'
	},
	shetuanmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社团名称'
	},
	fengmian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '封面'
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
	xingbie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '性别'
	},
	zhuanye: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '专业'
	},
	gerenjianli: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '个人简历'
	},
	toudishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('toudishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '投递时间'
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
	tableName: 'rutuanshenqing'
})

export default RutuanshenqingModel
