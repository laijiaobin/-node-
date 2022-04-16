import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import XueshengController from './Xuesheng'
import ShezhangController from './Shezhang'
import ShetuannaxinController from './Shetuannaxin'
import ShetuanjianjieController from './Shetuanjianjie'
import ShetuanhuodongController from './Shetuanhuodong'
import RutuanshenqingController from './Rutuanshenqing'
import HuodongbaomingController from './Huodongbaoming'
import XinshenggonglveController from './Xinshenggonglve'
import ForumController from './Forum'
import StoreupController from './Storeup'
import NewsController from './News'
import DiscussshetuannaxinController from './Discussshetuannaxin'
import DiscussshetuanhuodongController from './Discussshetuanhuodong'
import DiscusshuodongbaomingController from './Discusshuodongbaoming'
import DiscussxinshenggonglveController from './Discussxinshenggonglve'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/xuesheng', XueshengController({ config, db }))

	api.use('/shezhang', ShezhangController({ config, db }))

	api.use('/shetuannaxin', ShetuannaxinController({ config, db }))

	api.use('/shetuanjianjie', ShetuanjianjieController({ config, db }))

	api.use('/shetuanhuodong', ShetuanhuodongController({ config, db }))

	api.use('/rutuanshenqing', RutuanshenqingController({ config, db }))

	api.use('/huodongbaoming', HuodongbaomingController({ config, db }))

	api.use('/xinshenggonglve', XinshenggonglveController({ config, db }))

	api.use('/forum', ForumController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/discussshetuannaxin', DiscussshetuannaxinController({ config, db }))

	api.use('/discussshetuanhuodong', DiscussshetuanhuodongController({ config, db }))

	api.use('/discusshuodongbaoming', DiscusshuodongbaomingController({ config, db }))

	api.use('/discussxinshenggonglve', DiscussxinshenggonglveController({ config, db }))

	return api
}
