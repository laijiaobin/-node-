import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 社团简介
const ShetuanjianjieModel = sequelize.define('ShetuanjianjieModel', {
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
	shetuantupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社团图片'
	},
	shetuanleibie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社团类别'
	},
	shetuanrenshu: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '社团人数'
	},
	shezhangxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长姓名'
	},
	chenglishijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('chenglishijian')).format('YYYY-MM-DD')
        },
		comment: '成立时间'
	},
	shetuanjieshao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '社团介绍'
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
	tableName: 'shetuanjianjie'
})

export default ShetuanjianjieModel
