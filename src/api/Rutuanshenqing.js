import { version } from '../../package.json'
import { Router } from 'express'
import { Sequelize, Op, QueryTypes } from 'sequelize'
import sequelize from '../models/sequelize'
import toRes from '../lib/toRes'
import RutuanshenqingModel from '../models/RutuanshenqingModel'
import jwt from 'jsonwebtoken'
import moment from 'moment'

export default ({ config, db }) => {
	let api = Router()


	// 分页接口（后端）
	api.get('/page', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let sfsh = req.query.sfsh
			if (sfsh) {
				where.sfsh = {
					[Op.eq]: sfsh
				}
			}
			var biaoti = req.query.biaoti
			if (biaoti) {

				if (biaoti.indexOf('%') != -1) {
					where.biaoti = {
						[Op.like]: biaoti
					}
				} else {
					where.biaoti = {
						[Op.eq]: biaoti
					}
				}
			}
			var shetuanmingcheng = req.query.shetuanmingcheng
			if (shetuanmingcheng) {

				if (shetuanmingcheng.indexOf('%') != -1) {
					where.shetuanmingcheng = {
						[Op.like]: shetuanmingcheng
					}
				} else {
					where.shetuanmingcheng = {
						[Op.eq]: shetuanmingcheng
					}
				}
			}
			var xueshengxingming = req.query.xueshengxingming
			if (xueshengxingming) {

				if (xueshengxingming.indexOf('%') != -1) {
					where.xueshengxingming = {
						[Op.like]: xueshengxingming
					}
				} else {
					where.xueshengxingming = {
						[Op.eq]: xueshengxingming
					}
				}
			}
			var zhuanye = req.query.zhuanye
			if (zhuanye) {

				if (zhuanye.indexOf('%') != -1) {
					where.zhuanye = {
						[Op.like]: zhuanye
					}
				} else {
					where.zhuanye = {
						[Op.eq]: zhuanye
					}
				}
			}
			// let tableName = req.session.userinfo.tableName
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'shezhang') {
				where.shetuanmingcheng = {
					[Op.eq]: req.session.userinfo === undefined ? jwt.decode(req.headers.token).username : req.session.userinfo.shetuanmingcheng
				}
				if (where['userid'] != undefined) {
					delete where.userid
				}
			}
			if(tableName == 'xuesheng') {
				where.xueshengxuehao = {
					[Op.eq]: req.session.userinfo === undefined ? jwt.decode(req.headers.token).username : req.session.userinfo.xueshengxuehao
				}
				if (where['userid'] != undefined) {
					delete where.userid
				}
			}

			let result = await RutuanshenqingModel.findAndCountAll({
				order: [[sort, order]],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 分页接口（前端）
	api.get('/list', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let sfsh = req.query.sfsh
			if (sfsh) {
				where.sfsh = {
					[Op.eq]: sfsh
				}
			}
			var biaoti = req.query.biaoti
			if (biaoti) {

				if (biaoti.indexOf('%') != -1) {
					where.biaoti = {
						[Op.like]: biaoti
					}
				} else {
					where.biaoti = {
						[Op.eq]: biaoti
					}
				}
			}
			var shetuanmingcheng = req.query.shetuanmingcheng
			if (shetuanmingcheng) {

				if (shetuanmingcheng.indexOf('%') != -1) {
					where.shetuanmingcheng = {
						[Op.like]: shetuanmingcheng
					}
				} else {
					where.shetuanmingcheng = {
						[Op.eq]: shetuanmingcheng
					}
				}
			}
			var xueshengxingming = req.query.xueshengxingming
			if (xueshengxingming) {

				if (xueshengxingming.indexOf('%') != -1) {
					where.xueshengxingming = {
						[Op.like]: xueshengxingming
					}
				} else {
					where.xueshengxingming = {
						[Op.eq]: xueshengxingming
					}
				}
			}
			var zhuanye = req.query.zhuanye
			if (zhuanye) {

				if (zhuanye.indexOf('%') != -1) {
					where.zhuanye = {
						[Op.like]: zhuanye
					}
				} else {
					where.zhuanye = {
						[Op.eq]: zhuanye
					}
				}
			}

			let result = await RutuanshenqingModel.findAndCountAll({
				order: [[sort, order]],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})


	// 保存接口（后端）
	api.post('/save', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
			})


			const userinfo = await RutuanshenqingModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 保存接口（前端）
	api.post('/add', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
			})


			const userinfo = await RutuanshenqingModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 更新接口
	api.post('/update', async (req, res) => {

		try {

			await RutuanshenqingModel.update(req.body, {
				where: {
				  id: req.body.id
				}
			})

			toRes.session(res, 0, '编辑成功！')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 删除接口
	api.post('/delete', async (req, res) => {

		try {

			await RutuanshenqingModel.destroy({
				where: {
				  id: {
					[Op.in]: req.body
				  }
				}
			})

			toRes.session(res, 0, '删除成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 详情接口（后端）
	api.all('/info/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await RutuanshenqingModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 详情接口（前端）
	api.all('/detail/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await RutuanshenqingModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取需要提醒的记录数接口
	api.get('/remind/:columnName/:type', async (req, res) => {

		try {

			let sql = 'SELECT 0 AS count'
			
			if (req.params.type == 1) {
				if (req.query.remindstart) sql = "SELECT COUNT(*) AS count FROM rutuanshenqing WHERE " + req.params.columnName + " >= '" + req.query.remindstart + "'"
				if (req.query.remindend) sql = "SELECT COUNT(*) AS count FROM rutuanshenqing WHERE " + req.params.columnName + " <= '" + req.query.remindend + "'"

				if (req.query.remindstart && req.query.remindend) {
					sql = "SELECT COUNT(*) AS count FROM rutuanshenqing WHERE " + req.params.columnName + " >= '" + req.query.remindstart + "' AND " + req.params.columnName + " <= '" + req.query.remindend + "'"
				}
			}

			if (req.params.type == 2) {
				if (req.query.remindstart) {
					let remindStart = util.getDateTimeFormat(0 - req.query.remindstart, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM rutuanshenqing WHERE " + req.params.columnName + " >= '" + remindStart + "'"
				}
				if (req.query.remindend) {
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM rutuanshenqing WHERE " + req.params.columnName + " <= '" + remindEnd + "'"
				}

				if (req.query.remindstart && req.query.remindend) {
					let remindStart = util.getDateTimeFormat(0 - req.query.remindstart, "yyyy-MM-dd")
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM rutuanshenqing WHERE " + req.params.columnName + " >= '" + remindStart + "' AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}
			}

			const results = await sequelize.query(sql, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			})

			toRes.count(res, 0, results.count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})










	api.get('/group/:columnName', async (req, res) => {

		try {

			let sql = ""
			let columnName = req.params.columnName
			let tableName = "rutuanshenqing"
			let where = " WHERE 1 = 1 "
			if (jwt.decode(req.headers.token).role != '管理员') {
				where += " AND shetuanmingcheng = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if (jwt.decode(req.headers.token).role != '管理员') {
				where += " AND xueshengxuehao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			sql = "SELECT COUNT(*) AS total, " + columnName + " FROM " + tableName + where + " GROUP BY " + columnName
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	api.get('/value/:xColumnName/:yColumnName', async (req, res) => {

		try {

			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let tableName = "rutuanshenqing"
			let where = " WHERE 1 = 1 "
			if (jwt.decode(req.headers.token).role != '管理员') {
				where += " AND shetuanmingcheng = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if (jwt.decode(req.headers.token).role != '管理员') {
				where += " AND xueshengxuehao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("rutuanshenqing" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

			sql = "SELECT " + xColumnName + ", SUM(" + yColumnName + ") AS total FROM " + tableName + where + " GROUP BY " + xColumnName + " DESC"
			
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	api.get('/value/:xColumnName/:yColumnName/:timeStatType', async (req, res) => {

		try {
			
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let timeStatType = req.params.timeStatType
			let tableName = "rutuanshenqing"
			let where = " WHERE 1 = 1 "
			if (jwt.decode(req.headers.token).role != '管理员') {
				where += " AND shetuanmingcheng = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if (jwt.decode(req.headers.token).role != '管理员') {
				where += " AND xueshengxuehao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("rutuanshenqing" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

            if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d')";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')";
            } else {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)";
            }
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	return api
}
