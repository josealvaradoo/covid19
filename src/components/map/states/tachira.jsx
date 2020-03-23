import React from 'react'
import PropTypes from 'prop-types'

const Tachira = ({ isActive }) => (
	<path
		style={{
			opacity: 1,
			fill: isActive
				? "var(--coronavirus-enabled)"
				: "var(--coronavirus-disabled)",
			fillOpacity: 1,
			stroke: "#ffffff",
			strokeWidth: 1.41732283,
			strokeLinecap: "round",
			strokeLinejoin: "miter",
			strokeMiterlimit: 4,
			strokeDashArray: "none",
			strokeDashOffset: 0,
			strokeOpacity: 1
		}}
		d="M 199.67214,631.18675 C 199.67214,630.91377 198.77875,630.69043 197.68684,630.69043 C 196.03243,630.69043 195.70155,630.52499 195.70155,629.69778 C 195.70155,629.15182 195.4782,628.70513 195.20522,628.70513 C 194.93225,628.70513 194.7089,628.0351 194.7089,627.21616 C 194.7089,626.05808 194.48831,625.72719 193.71625,625.72719 C 193.1703,625.72719 192.72361,625.50385 192.72361,625.23087 C 192.72361,624.95789 192.14929,624.73454 191.44735,624.73454 C 190.01119,624.73454 188.75302,623.70814 188.75302,622.53654 C 188.75302,622.02758 188.30488,621.7566 187.46318,621.7566 C 186.66999,621.7566 185.63776,621.18327 184.78243,620.26763 C 183.45225,618.84367 181.30817,618.23107 181.30817,619.27499 C 181.30817,619.54796 180.86147,619.77131 180.31552,619.77131 C 179.76956,619.77131 179.32287,619.99465 179.32287,620.26763 C 179.32287,620.54061 178.87618,620.76396 178.33022,620.76396 C 177.78427,620.76396 177.33758,620.9873 177.33758,621.26028 C 177.33758,621.55224 175.60044,621.7566 173.11883,621.7566 C 170.63721,621.7566 168.90008,621.55224 168.90008,621.26028 C 168.90008,620.9873 168.56506,620.76396 168.15559,620.76396 C 167.74612,620.76396 167.41111,620.54061 167.41111,620.26763 C 167.41111,619.99465 166.74107,619.77131 165.92214,619.77131 C 165.1032,619.77131 164.43317,619.99465 164.43317,620.26763 C 164.43317,620.54061 163.76313,620.76396 162.94419,620.76396 C 162.12526,620.76396 161.45522,620.9873 161.45522,621.26028 C 161.45522,621.53326 161.05784,621.7566 160.57215,621.7566 C 160.08645,621.7566 159.36711,622.20329 158.97361,622.74925 C 158.23465,623.77449 156.49199,624.12302 156.49199,623.24557 C 156.49199,622.9726 155.91767,622.74925 155.21573,622.74925 C 153.77958,622.74925 152.5214,621.72285 152.5214,620.55125 C 152.5214,620.12227 152.29805,619.77131 152.02508,619.77131 C 151.7521,619.77131 151.52875,619.19699 151.52875,618.49505 C 151.52875,617.79311 151.20969,616.89972 150.81972,616.50975 C 150.42974,616.11979 149.53637,615.80072 148.83443,615.80072 C 148.03085,615.80072 147.55817,615.52498 147.55817,615.05624 C 147.55817,614.64677 147.33482,614.31175 147.06184,614.31175 C 146.78886,614.31175 146.56552,613.75339 146.56552,613.07094 C 146.56552,612.3885 146.78886,611.83013 147.06184,611.83013 C 147.33482,611.83013 147.55817,611.1601 147.55817,610.34116 C 147.55817,609.52223 147.78151,608.85219 148.05449,608.85219 C 148.35054,608.85219 148.55081,606.94962 148.55081,604.13712 C 148.55081,601.32462 148.35054,599.42204 148.05449,599.42204 C 147.78151,599.42204 147.55817,598.75201 147.55817,597.93307 C 147.55817,597.11414 147.33482,596.4441 147.06184,596.4441 C 146.78886,596.4441 146.56552,595.43905 146.56552,594.21065 C 146.56552,592.98225 146.78886,591.97719 147.06184,591.97719 C 147.35789,591.97719 147.55817,590.07462 147.55817,587.26212 C 147.55817,584.44962 147.35789,582.54704 147.06184,582.54704 C 146.32388,582.54704 146.44065,577.7172 147.18592,577.41479 C 147.65433,577.22473 147.62393,577.02294 147.06184,576.59116 C 146.49975,576.15938 146.46935,575.95759 146.93776,575.76753 C 147.27898,575.62907 147.55817,575.08771 147.55817,574.56451 C 147.55817,574.0413 147.78151,573.61322 148.05449,573.61322 C 148.32747,573.61322 148.55081,572.94318 148.55081,572.12425 C 148.55081,571.30532 148.77416,570.63528 149.04714,570.63528 C 149.33666,570.63528 149.54346,568.98087 149.54346,566.66469 C 149.54346,564.34851 149.33666,562.6941 149.04714,562.6941 C 148.77416,562.6941 148.55081,561.80072 148.55081,560.70881 C 148.55081,559.6169 148.32747,558.72351 148.05449,558.72351 C 147.78151,558.72351 147.55817,558.27682 147.55817,557.73087 C 147.55817,557.0691 147.88905,556.73822 148.55081,556.73822 C 149.28611,556.73822 149.54346,556.40734 149.54346,555.46196 C 149.54346,554.02581 150.56986,552.76763 151.74146,552.76763 C 152.19052,552.76763 152.5214,552.34651 152.5214,551.77499 C 152.5214,551.22903 152.74475,550.78234 153.01772,550.78234 C 153.2907,550.78234 153.51405,550.20802 153.51405,549.50608 C 153.51405,548.80414 153.83311,547.91075 154.22308,547.52078 C 155.02887,546.71501 157.48464,546.55484 157.48464,547.30807 C 157.48464,548.27658 160.02983,547.78594 161.22962,546.58615 C 162.32118,545.4946 162.44787,544.95263 162.44787,541.37475 C 162.44787,539.04354 162.2413,537.3816 161.95155,537.3816 C 161.67857,537.3816 161.45522,536.98422 161.45522,536.49852 C 161.45522,536.01283 161.00853,535.29349 160.46258,534.89999 C 159.87966,534.47984 159.46993,533.61516 159.46993,532.80512 C 159.46993,532.04645 159.24658,531.42572 158.97361,531.42572 C 158.66111,531.42572 158.47728,528.1169 158.47728,522.4919 C 158.47728,516.8669 158.29346,513.55807 157.98096,513.55807 C 157.70798,513.55807 157.48464,512.88804 157.48464,512.0691 C 157.48464,511.25017 157.26129,510.58013 156.98831,510.58013 C 156.71533,510.58013 156.49199,509.9101 156.49199,509.09116 C 156.49199,507.93308 156.2714,507.60219 155.49934,507.60219 C 154.72728,507.60219 154.50669,507.27131 154.50669,506.11322 C 154.50669,505.29429 154.28335,504.62425 154.01037,504.62425 C 153.29395,504.62425 153.39859,502.77555 154.13445,502.43215 C 154.63078,502.20054 154.63078,502.08473 154.13445,501.85311 C 153.2565,501.4434 153.36381,500.65366 154.29744,500.65366 C 154.72831,500.65366 155.9392,499.76028 156.98831,498.66837 C 158.05386,497.55935 159.36674,496.68307 159.96279,496.68307 C 161.83011,496.68307 162.44787,495.51979 162.44787,492.00345 C 162.44787,490.15996 162.66366,488.7419 162.94419,488.7419 C 163.21717,488.7419 163.44052,488.39093 163.44052,487.96196 C 163.44052,487.00536 164.62004,485.76396 165.52895,485.76396 C 165.89765,485.76396 166.52128,485.31726 166.91478,484.77131 C 167.54692,483.89426 168.19961,483.77866 172.51936,483.77866 C 177.63425,483.77866 178.78331,483.35823 178.86573,481.45658 C 178.88832,480.93527 179.0109,480.81521 179.15525,481.17296 C 179.322,481.58622 180.56366,481.79337 182.87395,481.79337 C 186.43988,481.79337 187.76037,481.19939 187.76037,479.59536 C 187.76037,479.09431 188.20405,478.81543 189.00118,478.81543 C 189.68362,478.81543 190.24199,479.03877 190.24199,479.31175 C 190.24199,479.58473 191.36616,479.80807 192.74015,479.80807 C 194.92885,479.80807 195.45145,479.59494 196.9589,478.08748 C 198.27286,476.77353 198.67949,475.95244 198.67949,474.61322 C 198.67949,472.99557 198.79498,472.85954 200.16846,472.85954 C 200.98739,472.85954 201.65743,472.6362 201.65743,472.36322 C 201.65743,472.09024 202.05482,471.8669 202.54051,471.8669 C 203.0262,471.8669 203.74554,471.42021 204.13905,470.87425 C 205.31699,469.23994 205.62802,469.71389 205.62802,473.14316 C 205.62802,477.0351 206.21509,477.82278 209.11586,477.82278 C 210.77565,477.82278 211.46116,477.52783 212.57655,476.33381 C 213.40902,475.44264 214.46871,474.84484 215.21594,474.84484 C 215.90261,474.84484 216.5947,474.56566 216.75394,474.22443 C 216.98554,473.72811 217.10137,473.72811 217.33298,474.22443 C 217.49223,474.56566 218.22462,474.84484 218.96054,474.84484 C 219.72923,474.84484 220.60303,475.26723 221.01405,475.83749 C 221.51233,476.52882 222.29888,476.83013 223.60523,476.83013 C 224.63688,476.83013 225.48096,477.05348 225.48096,477.32646 C 225.48096,477.59943 225.92765,477.82278 226.47361,477.82278 C 227.3339,477.82278 227.46625,478.15366 227.46625,480.3044 C 227.46625,481.66929 227.6896,482.78601 227.96258,482.78601 C 228.23555,482.78601 228.4589,483.45605 228.4589,484.27499 C 228.4589,485.09392 228.68225,485.76396 228.95522,485.76396 C 229.2282,485.76396 229.45155,486.21065 229.45155,486.7566 C 229.45155,487.30256 229.67489,487.74925 229.94787,487.74925 C 230.82532,487.74925 230.47679,489.49192 229.45155,490.23087 C 228.90559,490.62437 228.4589,491.47745 228.4589,492.1266 C 228.4589,492.79804 227.81699,493.90651 226.96993,494.69778 C 225.5388,496.03466 225.48096,496.25446 225.48096,500.35647 C 225.48096,502.87077 225.68488,504.62425 225.97728,504.62425 C 226.25026,504.62425 226.47361,505.42191 226.47361,506.39683 C 226.47361,508.14165 225.58254,509.58749 224.50722,509.58749 C 224.20565,509.58749 223.18463,510.36175 222.23831,511.30808 C 220.92436,512.62203 220.51772,513.44311 220.51772,514.78234 C 220.51772,516.04571 220.29966,516.53601 219.73779,516.53601 C 218.56617,516.53601 217.53978,517.79418 217.53978,519.23034 C 217.53978,520.27026 217.30344,520.5066 216.26352,520.5066 C 214.0769,520.5066 213.56919,521.52871 213.56919,525.93071 C 213.56919,528.27052 213.77563,529.93675 214.06552,529.93675 C 214.3385,529.93675 214.56184,530.28772 214.56184,530.71669 C 214.56184,532.11297 215.90666,532.91469 218.24882,532.91469 C 219.49671,532.91469 220.51772,532.69135 220.51772,532.41837 C 220.51772,532.14539 221.3618,531.92204 222.39345,531.92204 C 223.69981,531.92204 224.48635,532.22336 224.98464,532.91469 C 225.37814,533.46065 226.09748,533.90734 226.58317,533.90734 C 227.06887,533.90734 227.46625,534.25831 227.46625,534.68728 C 227.46625,535.59776 228.63119,536.88528 229.45501,536.88528 C 229.76889,536.88528 230.88406,537.77866 231.93317,538.87057 C 232.98227,539.96249 234.19316,540.85587 234.62403,540.85587 C 235.05492,540.85587 235.40743,541.20684 235.40743,541.63581 C 235.40743,542.54629 236.57237,543.83381 237.39618,543.83381 C 237.71007,543.83381 238.82523,544.72719 239.87434,545.8191 C 241.60873,547.62426 242.01052,547.8044 244.30234,547.8044 C 245.68865,547.8044 246.82287,547.58105 246.82287,547.30807 C 246.82287,547.0351 247.49291,546.81175 248.31184,546.81175 C 249.13078,546.81175 249.80081,546.5884 249.80081,546.31543 C 249.80081,546.04245 250.35918,545.8191 251.04162,545.8191 C 251.72407,545.8191 252.28243,546.04245 252.28243,546.31543 C 252.28243,546.59596 253.7005,546.81175 255.54399,546.81175 C 258.75286,546.81175 260.22361,547.43679 260.22361,548.8005 C 260.22361,549.11439 261.11699,550.22955 262.2089,551.27866 C 264.08133,553.07769 264.79929,554.75293 263.69787,554.75293 C 263.38645,554.75293 263.20155,557.89631 263.20155,563.19043 C 263.20155,568.48455 263.01664,571.62793 262.70522,571.62793 C 262.43225,571.62793 262.2089,572.87228 262.2089,574.39316 C 262.2089,577.23902 262.91162,578.57646 264.4069,578.57646 C 264.83586,578.57646 265.18684,578.7998 265.18684,579.07278 C 265.18684,579.34576 265.85688,579.5691 266.67581,579.5691 C 267.49475,579.5691 268.16478,579.79245 268.16478,580.06543 C 268.16478,580.3384 268.72315,580.56175 269.40559,580.56175 C 270.45339,580.56175 270.6464,580.79337 270.6464,582.05072 C 270.6464,583.48454 270.56368,583.53969 268.41294,583.53969 C 266.75853,583.53969 266.17949,583.73271 266.17949,584.28418 C 266.17949,584.82404 266.7349,585.02866 268.20024,585.02866 C 270.29964,585.02866 271.63905,585.88479 271.63905,587.22667 C 271.63905,587.65564 271.91823,588.02424 272.25945,588.04579 C 272.75578,588.07714 272.75578,588.13504 272.25945,588.33531 C 271.91823,588.47299 271.63905,589.01373 271.63905,589.53693 C 271.63905,590.16253 271.29354,590.48822 270.62986,590.48822 C 269.32271,590.48822 266.17949,593.63144 266.17949,594.93859 C 266.17949,595.49364 266.40283,595.94778 266.67581,595.94778 C 266.94879,595.94778 267.17214,596.2828 267.17214,596.69226 C 267.17214,597.10173 266.94879,597.43675 266.67581,597.43675 C 266.40283,597.43675 266.17949,597.99511 266.17949,598.67756 C 266.17949,599.36 266.40283,599.91837 266.67581,599.91837 C 266.94879,599.91837 267.17214,600.36506 267.17214,600.91101 C 267.17214,601.71459 267.50302,601.90366 268.90927,601.90366 C 269.86469,601.90366 270.6464,602.12701 270.6464,602.39999 C 270.6464,602.67296 271.09309,602.89631 271.63905,602.89631 C 272.30081,602.89631 272.63169,603.22719 272.63169,603.88896 C 272.63169,604.97924 273.42029,605.24559 273.74694,604.26563 C 273.9893,603.53857 275.60964,604.94091 275.60964,605.87771 C 275.60964,606.19159 276.50302,607.30676 277.59493,608.35587 C 278.68684,609.40498 279.58022,610.61587 279.58022,611.04674 C 279.58022,611.4776 279.92539,611.83013 280.34727,611.83013 C 281.34014,611.83013 283.55081,614.0408 283.55081,615.03368 C 283.55081,615.46983 283.12261,615.80072 282.55817,615.80072 C 282.01221,615.80072 281.56552,616.02407 281.56552,616.29704 C 281.56552,616.57002 281.21455,616.79337 280.78558,616.79337 C 279.89418,616.79337 278.58758,615.63428 278.58758,614.84353 C 278.58758,614.55104 277.71281,614.31175 276.64364,614.31175 C 275.5738,614.31175 274.56953,614.03279 274.41019,613.69135 C 274.17858,613.19502 274.06276,613.19502 273.83114,613.69135 C 273.48773,614.4272 271.63905,614.53185 271.63905,613.81543 C 271.63905,613.54245 270.96901,613.3191 270.15008,613.3191 C 269.33114,613.3191 268.66111,613.09576 268.66111,612.82278 C 268.66111,612.5498 268.10274,612.32646 267.4203,612.32646 C 266.73785,612.32646 266.17949,612.58397 266.17949,612.89872 C 266.17949,613.21347 265.76244,612.99012 265.2527,612.4024 C 264.62156,611.67468 263.75078,611.33381 262.52292,611.33381 C 261.53128,611.33381 260.71993,611.11046 260.71993,610.83749 C 260.71993,610.56451 260.16157,610.34116 259.47912,610.34116 C 258.79668,610.34116 258.23831,610.56451 258.23831,610.83749 C 258.23831,611.11046 257.90329,611.33381 257.49383,611.33381 C 257.08436,611.33381 256.74934,611.11046 256.74934,610.83749 C 256.74934,610.56451 256.19098,610.34116 255.50853,610.34116 C 254.82609,610.34116 254.26772,610.56451 254.26772,610.83749 C 254.26772,611.11046 253.93271,611.33381 253.52324,611.33381 C 253.11377,611.33381 252.77875,611.11046 252.77875,610.83749 C 252.77875,610.56451 252.10872,610.34116 251.28978,610.34116 C 250.47085,610.34116 249.80081,610.11782 249.80081,609.84484 C 249.80081,609.57186 249.13078,609.34851 248.31184,609.34851 C 247.49291,609.34851 246.82287,609.12517 246.82287,608.85219 C 246.82287,608.56023 245.08574,608.35587 242.60412,608.35587 C 239.74927,608.35587 238.38537,608.54088 238.38537,608.92813 C 238.38537,609.24288 237.96832,609.01954 237.45859,608.43181 C 236.25665,607.04595 234.41478,607.00001 234.41478,608.35587 C 234.41478,609.01763 234.0839,609.34851 233.42214,609.34851 C 232.87618,609.34851 232.42949,609.57186 232.42949,609.84484 C 232.42949,610.11782 231.9828,610.34116 231.43684,610.34116 C 230.89089,610.34116 230.44419,610.11782 230.44419,609.84484 C 230.44419,609.57186 229.9975,609.34851 229.45155,609.34851 C 228.90559,609.34851 228.4589,609.57186 228.4589,609.84484 C 228.4589,610.11782 228.01221,610.34116 227.46625,610.34116 C 226.9203,610.34116 226.47361,610.11782 226.47361,609.84484 C 226.47361,609.57186 226.25026,609.34851 225.97728,609.34851 C 225.7043,609.34851 225.48096,609.79521 225.48096,610.34116 C 225.48096,610.88712 225.25761,611.33381 224.98464,611.33381 C 224.71166,611.33381 224.48831,611.7805 224.48831,612.32646 C 224.48831,612.87241 224.26497,613.3191 223.99199,613.3191 C 223.71901,613.3191 223.49567,613.65412 223.49567,614.06359 C 223.49567,614.47306 223.71901,614.80807 223.99199,614.80807 C 224.26497,614.80807 224.48831,615.25476 224.48831,615.80072 C 224.48831,616.46248 224.15743,616.79337 223.49567,616.79337 C 222.8339,616.79337 222.50302,617.12425 222.50302,617.78601 C 222.50302,618.33197 222.27967,618.77866 222.00669,618.77866 C 221.73372,618.77866 221.51037,619.39939 221.51037,620.15806 C 221.51037,620.9681 221.10064,621.83278 220.51772,622.25293 C 219.97177,622.64643 219.52508,623.36577 219.52508,623.85147 C 219.52508,624.40366 219.15314,624.73454 218.53243,624.73454 C 217.98647,624.73454 217.53978,624.95789 217.53978,625.23087 C 217.53978,625.50385 216.69571,625.72719 215.66406,625.72719 C 214.3577,625.72719 213.57116,626.0285 213.07287,626.71984 C 212.67937,627.26579 212.00933,627.71249 211.5839,627.71249 C 211.15847,627.71249 210.48844,628.15918 210.09493,628.70513 C 209.59665,629.39647 208.8101,629.69778 207.50374,629.69778 C 206.4721,629.69778 205.62802,629.92113 205.62802,630.1941 C 205.62802,630.91053 203.77932,630.80588 203.43592,630.07002 C 203.20432,629.5737 203.08849,629.5737 202.85688,630.07002 C 202.69763,630.41124 202.25095,630.69043 201.86423,630.69043 C 201.4775,630.69043 201.16111,630.91377 201.16111,631.18675 C 201.16111,631.45973 200.82609,631.68307 200.41662,631.68307 C 200.00715,631.68307 199.67214,631.45973 199.67214,631.18675 z"
		id="path3012"
	/>
);

Tachira.propTypes = {
	isActive: PropTypes.bool
}

Tachira.defaultProps = {
	isActive: false
}

export default Tachira