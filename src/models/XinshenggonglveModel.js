import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 新生攻略
const XinshenggonglveModel = sequelize.define('XinshenggonglveModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	biaotimingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '标题名称'
	},
	tupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	zhuyishixiang: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '注意事项'
	},
	faburiqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('faburiqi')).format('YYYY-MM-DD')
        },
		comment: '发布日期'
	},
	xinshenggonglve: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '新生攻略'
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
	tableName: 'xinshenggonglve'
})

export default XinshenggonglveModel
