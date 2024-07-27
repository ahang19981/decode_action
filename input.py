#   --------------------------------注释区--------------------------------
#   入口:蜜雪冰城小程序
#   变量: yuanshen_mxbq_aw填口令
#         yuanshen_mxbqqg填Access-Token
#         yuanshen_mxbqqg_aid填marketingId 可以提前抓好 好像一天一变
#   多号分割方式 [ @ 或 换行 或 新建同名变量 ]
#   抓取Authorization的值填入
#   corn: 需要抢免单的整点前运行
thread_m = 2 #并发线程数
#   --------------------------------一般不动区--------------------------------
#                     _ooOoo_
#                    o8888888o
#                    88" . "88
#                    (| -_- |)
#                     O\ = /O
#                 ____/`---'\____
#               .   ' \\| |// `.
#                / \\||| : |||// \
#              / _||||| -:- |||||- \
#                | | \\\ - /// | |
#              | \_| ''\---/'' | |
#               \ .-\__ `-` ___/-. /
#            ___`. .' /--.--\ `. . __
#         ."" '< `.___\_<|>_/___.' >'"".
#        | | : `- \`.;`\ _ /`;.`/ - ` : | |
#          \ \ `-. \_ __\ /__ _/ .-` / /
#  ======`-.____`-.___\_____/___.-`____.-'======
#                     `=---='
# 
#  .............................................
#           佛祖保佑             永无BUG
#           佛祖镇楼             BUG辟邪
#   --------------------------------代码区--------------------------------
'''
Powered By Huaji
Create at [2024-07-27 15:58]

 __    __   __    __       ___             __   __  
|  |  |  | |  |  |  |     /   \           |  | |  | 
|  |__|  | |  |  |  |    /  ^  \          |  | |  | 
|   __   | |  |  |  |   /  /_\  \   .--.  |  | |  | 
|  |  |  | |  `--'  |  /  _____  \  |  `--'  | |  | 
|__|  |__|  \______/  /__/     \__\  \______/  |__|                                                

'''
import bz2, base64
exec(bz2.decompress(base64.b64decode('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')))
# !Look Your Mother!

