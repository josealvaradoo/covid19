import React from 'react'
import PropTypes from 'prop-types'

const Sucre = ({ isActive }) => (
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
		d="M 1374.957,284.78593 C 1374.5635,284.23997 1373.8441,283.79328 1373.3584,283.79328 C 1372.8727,283.79328 1372.4753,283.45826 1372.4753,283.04879 C 1372.4753,282.63933 1372.252,282.30431 1371.979,282.30431 C 1371.706,282.30431 1371.4827,282.63933 1371.4827,283.04879 C 1371.4827,283.58648 1370.9312,283.79328 1369.4974,283.79328 C 1367.8202,283.79328 1367.5121,283.63375 1367.5121,282.76518 C 1367.5121,281.565 1366.4136,280.31901 1365.3555,280.31901 C 1364.9492,280.31901 1364.5036,280.03983 1364.3652,279.69861 C 1364.1751,279.2302 1363.9733,279.2606 1363.5415,279.82269 C 1363.1097,280.38478 1362.908,280.41518 1362.7179,279.94677 C 1362.4095,279.18689 1355.6003,279.06818 1355.6003,279.82269 C 1355.6003,280.82121 1353.9769,280.28007 1352.6224,278.83004 C 1351.8574,278.01111 1350.8744,277.34107 1350.438,277.34107 C 1349.9144,277.34107 1349.6445,276.9023 1349.6445,276.05123 C 1349.6445,275.25806 1349.0711,274.22582 1348.1555,273.37048 C 1347.3366,272.60549 1346.6665,271.62249 1346.6665,271.18606 C 1346.6665,270.74961 1346.4432,270.39254 1346.1702,270.39254 C 1345.8972,270.39254 1345.6739,270.04157 1345.6739,269.61261 C 1345.6739,268.11731 1344.3364,267.4146 1341.4906,267.4146 C 1339.9697,267.4146 1338.7253,267.19126 1338.7253,266.91828 C 1338.7253,266.63151 1337.1536,266.42196 1335.0029,266.42196 C 1332.8522,266.42196 1331.2805,266.63151 1331.2805,266.91828 C 1331.2805,267.86409 1328.0591,267.46142 1327.3099,266.42196 C 1326.7364,265.62635 1326.0251,265.42931 1323.726,265.42931 C 1322.1447,265.42931 1320.8577,265.20661 1320.8577,264.93298 C 1320.8577,264.66001 1320.411,264.43666 1319.865,264.43666 C 1319.3191,264.43666 1318.8724,264.21332 1318.8724,263.94034 C 1318.8724,263.66736 1317.7455,263.44401 1316.3682,263.44401 C 1314.3712,263.44401 1313.6173,263.19728 1312.6458,262.22576 C 1311.9757,261.55572 1311.4275,260.75806 1311.4275,260.45318 C 1311.4275,259.37223 1309.9855,258.48078 1308.2369,258.48078 C 1307.2619,258.48078 1306.4643,258.25743 1306.4643,257.98446 C 1306.4643,257.71148 1305.22,257.48813 1303.6991,257.48813 C 1300.7097,257.48813 1299.5158,256.78529 1299.5158,255.02542 C 1299.5158,254.45087 1298.7415,253.20651 1297.7952,252.26019 C 1296.338,250.80301 1295.7301,250.5396 1293.8246,250.5396 C 1292.5871,250.5396 1291.5746,250.76295 1291.5746,251.03593 C 1291.5746,251.3089 1290.9046,251.53225 1290.0856,251.53225 C 1289.2667,251.53225 1288.5967,251.75559 1288.5967,252.02857 C 1288.5967,252.30155 1288.0208,252.5249 1287.3169,252.5249 C 1286.4727,252.5249 1285.3881,253.20052 1284.1297,254.51019 C 1283.0806,255.6021 1282.0307,256.49548 1281.7966,256.49548 C 1281.5625,256.49548 1281.049,256.94218 1280.6555,257.48813 C 1280.262,258.03409 1279.592,258.48078 1279.1665,258.48078 C 1278.7411,258.48078 1278.071,258.92747 1277.6775,259.47343 C 1277.2841,260.01938 1276.5833,260.46607 1276.1204,260.46607 C 1275.6575,260.46607 1275.166,260.74525 1275.0283,261.08648 C 1274.828,261.5828 1274.7701,261.5828 1274.7388,261.08648 C 1274.7119,260.66018 1273.7245,260.46607 1271.5831,260.46607 C 1269.0359,260.46607 1268.3358,260.64742 1267.7511,261.45872 C 1267.1081,262.35081 1266.4662,262.45137 1261.4149,262.45137 C 1256.109,262.45137 1255.7259,262.5196 1254.5759,263.66962 C 1253.9059,264.33966 1253.3577,265.40707 1253.3577,266.04167 C 1253.3577,266.67627 1252.911,267.51742 1252.365,267.91093 C 1251.8191,268.30443 1251.3724,268.91695 1251.3724,269.27209 C 1251.3724,270.48884 1246.0207,275.35578 1244.6828,275.35578 C 1243.9944,275.35578 1243.4312,275.57912 1243.4312,275.8521 C 1243.4312,276.12508 1242.5378,276.34843 1241.4459,276.34843 C 1240.354,276.34843 1239.4606,276.57177 1239.4606,276.84475 C 1239.4606,277.11773 1238.5672,277.34107 1237.4753,277.34107 C 1236.3834,277.34107 1235.49,277.56442 1235.49,277.8374 C 1235.49,278.11037 1235.0434,278.33372 1234.4974,278.33372 C 1233.9514,278.33372 1233.5047,278.55707 1233.5047,278.83004 C 1233.5047,279.10302 1233.0581,279.32637 1232.5121,279.32637 C 1231.9476,279.32637 1231.5195,278.99548 1231.5195,278.55932 C 1231.5195,277.12312 1229.2045,275.35578 1227.3233,275.35578 C 1226.3555,275.35578 1225.5636,275.13243 1225.5636,274.85946 C 1225.5636,274.58583 1224.2766,274.36313 1222.6952,274.36313 C 1220.3962,274.36313 1219.6848,274.56017 1219.1114,275.35578 C 1218.5877,276.08232 1217.8265,276.34843 1216.272,276.34843 C 1215.1039,276.34843 1214.1481,276.57177 1214.1481,276.84475 C 1214.1481,277.12836 1212.6592,277.34107 1210.6739,277.34107 C 1208.6886,277.34107 1207.1996,277.55378 1207.1996,277.8374 C 1207.1996,278.11037 1206.5296,278.33372 1205.7106,278.33372 C 1204.8917,278.33372 1204.2217,278.55707 1204.2217,278.83004 C 1204.2217,279.10302 1203.6009,279.32637 1202.8423,279.32637 C 1202.0322,279.32637 1201.1675,279.7361 1200.7474,280.31901 C 1200.1311,281.17412 1199.4626,281.31166 1195.9227,281.31166 C 1192.5473,281.31166 1191.8136,281.1747 1191.8136,280.54462 C 1191.8136,280.12275 1191.2654,279.22936 1190.5953,278.55932 C 1189.4306,277.39463 1189.1019,277.34107 1183.115,277.34107 C 1176.3703,277.34107 1175.4349,277.02627 1175.4349,274.75631 C 1175.4349,274.11464 1174.9882,273.26767 1174.4422,272.87416 C 1173.6297,272.28847 1173.4496,271.58933 1173.4496,269.01961 C 1173.4496,266.34852 1173.268,265.69889 1172.2314,264.66226 C 1171.459,263.88996 1170.4468,263.44401 1169.4661,263.44401 C 1168.6153,263.44401 1167.5841,263.109 1167.1746,262.69953 C 1166.7652,262.29006 1166.6695,261.95504 1166.962,261.95504 C 1167.2544,261.95504 1167.4937,261.50835 1167.4937,260.9624 C 1167.4937,260.41644 1167.7171,259.96975 1167.99,259.96975 C 1168.263,259.96975 1168.4864,259.52306 1168.4864,258.9771 C 1168.4864,258.20504 1168.8173,257.98446 1169.9753,257.98446 C 1170.7943,257.98446 1171.4643,257.76111 1171.4643,257.48813 C 1171.4643,257.21515 1172.3577,256.99181 1173.4496,256.99181 C 1175.4349,256.99181 1175.4349,256.99181 1175.4349,255.00651 C 1175.4349,253.20504 1175.5531,253.02122 1176.7111,253.02122 C 1178.1473,253.02122 1179.4055,251.99482 1179.4055,250.82322 C 1179.4055,250.37417 1179.8266,250.04328 1180.3981,250.04328 C 1180.9441,250.04328 1181.3908,250.26662 1181.3908,250.5396 C 1181.3908,251.26143 1182.3431,251.14715 1183.1633,250.32689 C 1183.5914,249.89882 1183.8724,248.62048 1183.8724,247.10079 C 1183.8724,244.63494 1183.9027,244.58372 1185.3614,244.58372 C 1186.1803,244.58372 1186.8503,244.36037 1186.8503,244.0874 C 1186.8503,243.81442 1187.5204,243.59107 1188.3393,243.59107 C 1189.1582,243.59107 1189.8283,243.36773 1189.8283,243.09475 C 1189.8283,242.82177 1190.8435,242.59843 1192.0843,242.59843 C 1193.8178,242.59843 1194.6225,242.31628 1195.5586,241.38017 C 1196.2286,240.71014 1196.7768,239.81676 1196.7768,239.39488 C 1196.7768,238.97301 1197.0002,238.62784 1197.2731,238.62784 C 1197.5461,238.62784 1197.7695,237.9578 1197.7695,237.13887 C 1197.7695,235.98078 1197.99,235.6499 1198.7621,235.6499 C 1199.4238,235.6499 1199.7547,235.31901 1199.7547,234.65725 C 1199.7547,233.99549 1200.0856,233.6646 1200.7474,233.6646 C 1201.2934,233.6646 1201.74,233.44126 1201.74,233.16828 C 1201.74,232.8953 1202.1867,232.67196 1202.7327,232.67196 C 1203.2786,232.67196 1203.7253,232.44861 1203.7253,232.17563 C 1203.7253,231.90265 1204.2837,231.67931 1204.9661,231.67931 C 1205.6486,231.67931 1206.207,231.90265 1206.207,232.17563 C 1206.207,232.44861 1206.6536,232.67196 1207.1996,232.67196 C 1207.8613,232.67196 1208.1922,233.00284 1208.1922,233.6646 C 1208.1922,234.21056 1208.4156,234.65725 1208.6886,234.65725 C 1208.9615,234.65725 1209.1849,235.10394 1209.1849,235.6499 C 1209.1849,236.31166 1209.5158,236.64254 1210.1775,236.64254 C 1210.7235,236.64254 1211.1702,236.86589 1211.1702,237.13887 C 1211.1702,237.42563 1212.7419,237.63519 1214.8926,237.63519 C 1217.0433,237.63519 1218.615,237.84475 1218.615,238.13151 C 1218.615,238.85778 1222.4563,238.74264 1222.7546,238.00743 C 1222.9442,237.54029 1223.1383,237.57094 1223.5405,238.13151 C 1224.0152,238.79328 1224.134,238.79328 1224.6087,238.13151 C 1225.0109,237.57094 1225.205,237.54029 1225.3946,238.00743 C 1225.6923,238.7411 1228.5415,238.85344 1228.5415,238.13151 C 1228.5415,237.83372 1230.5268,237.63519 1233.5047,237.63519 C 1236.4827,237.63519 1238.468,237.83372 1238.468,238.13151 C 1238.468,238.43505 1240.8005,238.62784 1244.4729,238.62784 L 1250.4778,238.62784 L 1251.8687,237.13887 C 1252.6337,236.31993 1253.6167,235.6499 1254.0531,235.6499 C 1254.4896,235.6499 1254.8467,235.42655 1254.8467,235.15357 C 1254.8467,234.88059 1255.2441,234.65725 1255.7297,234.65725 C 1256.2154,234.65725 1256.9348,234.21056 1257.3283,233.6646 C 1257.9017,232.869 1258.6131,232.67196 1260.9121,232.67196 C 1262.4935,232.67196 1263.7805,232.44926 1263.7805,232.17563 C 1263.7805,231.90265 1264.4505,231.67931 1265.2695,231.67931 C 1266.0884,231.67931 1266.7584,231.45596 1266.7584,231.18298 C 1266.7584,230.91001 1267.6518,230.68666 1268.7437,230.68666 C 1270.6187,230.68666 1270.729,230.60394 1270.729,229.19769 C 1270.729,227.72376 1270.7014,227.70872 1267.9992,227.70872 C 1266.4979,227.70872 1265.2695,227.93207 1265.2695,228.20504 C 1265.2695,229.15086 1262.0481,228.74819 1261.2989,227.70872 C 1260.8141,227.03608 1260.014,226.71607 1258.8172,226.71607 C 1257.6205,226.71607 1256.8204,226.39607 1256.3356,225.72343 C 1255.8631,225.06788 1255.0508,224.73078 1253.9436,224.73078 C 1252.7207,224.73078 1251.8906,224.32786 1250.8761,223.24181 C 1249.6824,221.96394 1249.1264,221.75284 1246.9545,221.75284 C 1245.5627,221.75284 1244.4239,221.52949 1244.4239,221.25651 C 1244.4239,220.96929 1242.8392,220.76019 1240.6625,220.76019 C 1236.9231,220.76019 1236.8901,220.74863 1234.9937,218.7749 C 1233.313,217.02555 1232.8162,216.7896 1230.8139,216.7896 C 1229.5641,216.7896 1228.5415,217.01295 1228.5415,217.28593 C 1228.5415,217.58372 1226.5562,217.78225 1223.5783,217.78225 C 1220.6003,217.78225 1218.615,217.98078 1218.615,218.27857 C 1218.615,218.58664 1215.8853,218.7749 1211.4184,218.7749 C 1206.9514,218.7749 1204.2217,218.96316 1204.2217,219.27122 C 1204.2217,219.5442 1203.775,219.76754 1203.229,219.76754 C 1202.6831,219.76754 1202.2364,219.99089 1202.2364,220.26387 C 1202.2364,220.53684 1201.1196,220.76019 1199.7547,220.76019 C 1198.3899,220.76019 1197.2731,220.98354 1197.2731,221.25651 C 1197.2731,221.52949 1196.8264,221.75284 1196.2805,221.75284 C 1195.5084,221.75284 1195.2878,222.08372 1195.2878,223.24181 C 1195.2878,224.23446 1195.0397,224.73078 1194.5434,224.73078 C 1193.9895,224.73078 1193.7989,224.14629 1193.7989,222.44829 C 1193.7989,220.55217 1193.5468,219.93036 1192.3099,218.7749 C 1191.491,218.0099 1190.8209,217.0269 1190.8209,216.59047 C 1190.8209,216.15404 1190.5976,215.79696 1190.3246,215.79696 C 1190.0516,215.79696 1189.8283,215.46194 1189.8283,215.05247 C 1189.8283,214.643 1189.6049,214.30798 1189.332,214.30798 C 1188.6102,214.30798 1188.7244,213.35565 1189.5447,212.5354 C 1190.3449,211.73515 1194.2952,211.55827 1194.2952,212.32269 C 1194.2952,212.59567 1195.4119,212.81901 1196.7768,212.81901 C 1198.1417,212.81901 1199.2584,213.04236 1199.2584,213.31534 C 1199.2584,213.58832 1199.7051,213.81166 1200.2511,213.81166 C 1200.797,213.81166 1201.2437,214.03501 1201.2437,214.30798 C 1201.2437,214.6101 1203.4772,214.80431 1206.9514,214.80431 C 1210.4257,214.80431 1212.6592,214.6101 1212.6592,214.30798 C 1212.6592,214.03501 1213.3292,213.81166 1214.1481,213.81166 C 1214.9671,213.81166 1215.6371,213.58832 1215.6371,213.31534 C 1215.6371,213.04236 1216.0838,212.81901 1216.6297,212.81901 C 1217.1757,212.81901 1217.6224,212.59567 1217.6224,212.32269 C 1217.6224,212.04971 1218.2924,211.82637 1219.1114,211.82637 C 1219.9303,211.82637 1220.6003,211.60302 1220.6003,211.33004 C 1220.6003,211.05707 1221.2704,210.83372 1222.0893,210.83372 C 1222.9082,210.83372 1223.5783,211.05707 1223.5783,211.33004 C 1223.5783,211.60302 1224.4717,211.82637 1225.5636,211.82637 C 1226.6555,211.82637 1227.5489,212.04971 1227.5489,212.32269 C 1227.5489,212.59567 1227.9956,212.81901 1228.5415,212.81901 C 1229.0875,212.81901 1229.5342,213.04236 1229.5342,213.31534 C 1229.5342,213.58832 1229.9809,213.81166 1230.5268,213.81166 C 1231.0728,213.81166 1231.5195,214.03501 1231.5195,214.30798 C 1231.5195,214.6021 1233.3393,214.80431 1235.9864,214.80431 C 1238.6334,214.80431 1240.4533,214.6021 1240.4533,214.30798 C 1240.4533,214.03501 1241.1233,213.81166 1241.9422,213.81166 C 1242.7612,213.81166 1243.4312,213.58832 1243.4312,213.31534 C 1243.4312,213.04236 1243.8779,212.81901 1244.4239,212.81901 C 1244.9698,212.81901 1245.4165,212.59567 1245.4165,212.32269 C 1245.4165,212.04971 1245.8632,211.82637 1246.4092,211.82637 C 1246.9551,211.82637 1247.4018,211.60302 1247.4018,211.33004 C 1247.4018,211.05707 1247.7368,210.83372 1248.1463,210.83372 C 1248.5558,210.83372 1248.8908,210.61037 1248.8908,210.3374 C 1248.8908,210.06442 1249.5608,209.84107 1250.3797,209.84107 C 1251.1987,209.84107 1251.8687,209.58356 1251.8687,209.26881 C 1251.8687,208.95406 1252.2858,209.1774 1252.7955,209.76513 C 1253.5931,210.68476 1254.2504,210.83372 1257.5106,210.83372 C 1259.7052,210.83372 1261.2989,211.04251 1261.2989,211.33004 C 1261.2989,211.60302 1261.9689,211.82637 1262.7878,211.82637 C 1263.6068,211.82637 1264.2768,212.04971 1264.2768,212.32269 C 1264.2768,212.61221 1265.9312,212.81901 1268.2474,212.81901 C 1270.5636,212.81901 1272.218,213.02582 1272.218,213.31534 C 1272.218,213.58832 1272.888,213.81166 1273.707,213.81166 C 1274.5259,213.81166 1275.1959,214.03501 1275.1959,214.30798 C 1275.1959,214.59475 1276.7676,214.80431 1278.9184,214.80431 C 1281.0691,214.80431 1282.6408,214.59475 1282.6408,214.30798 C 1282.6408,214.02437 1284.1297,213.81166 1286.115,213.81166 C 1288.1003,213.81166 1289.5893,213.59895 1289.5893,213.31534 C 1289.5893,213.04236 1290.036,212.81901 1290.582,212.81901 C 1291.1279,212.81901 1291.5746,212.59567 1291.5746,212.32269 C 1291.5746,212.04971 1292.2446,211.82637 1293.0636,211.82637 C 1293.8825,211.82637 1294.5525,211.60302 1294.5525,211.33004 C 1294.5525,211.05707 1295.2226,210.83372 1296.0415,210.83372 C 1296.8604,210.83372 1297.5305,210.61037 1297.5305,210.3374 C 1297.5305,210.06442 1298.2005,209.84107 1299.0195,209.84107 C 1299.8384,209.84107 1300.5084,209.61773 1300.5084,209.34475 C 1300.5084,208.59202 1307.3096,208.70997 1307.6638,209.46883 C 1307.8954,209.96515 1308.0112,209.96515 1308.2428,209.46883 C 1308.4508,209.02308 1310.2083,208.84843 1314.4857,208.84843 L 1320.4392,208.84843 L 1322.3467,206.86313 C 1323.3958,205.77122 1324.6067,204.87784 1325.0375,204.87784 C 1325.4684,204.87784 1325.8209,204.65449 1325.8209,204.38151 C 1325.8209,204.10854 1326.491,203.88519 1327.3099,203.88519 C 1328.1288,203.88519 1328.7989,203.66184 1328.7989,203.38887 C 1328.7989,203.11589 1329.8039,202.89254 1331.0323,202.89254 C 1332.2607,202.89254 1333.2658,203.11589 1333.2658,203.38887 C 1333.2658,203.68492 1335.1683,203.88519 1337.9809,203.88519 C 1340.7934,203.88519 1342.6959,203.68492 1342.6959,203.38887 C 1342.6959,203.09475 1344.5158,202.89254 1347.1628,202.89254 C 1349.8099,202.89254 1351.6297,203.09475 1351.6297,203.38887 C 1351.6297,203.66184 1352.4738,203.88519 1353.5055,203.88519 C 1354.8118,203.88519 1355.5984,204.1865 1356.0967,204.87784 C 1356.5901,205.56238 1357.3815,205.87048 1358.6465,205.87048 C 1359.6553,205.87048 1360.6111,206.14967 1360.7704,206.49089 C 1361.002,206.98721 1361.1178,206.98721 1361.3494,206.49089 C 1361.5453,206.07119 1362.9101,205.87048 1365.5682,205.87048 C 1367.8567,205.87048 1369.4974,205.66325 1369.4974,205.37416 C 1369.4974,205.10118 1370.1674,204.87784 1370.9864,204.87784 C 1371.8053,204.87784 1372.4753,204.65449 1372.4753,204.38151 C 1372.4753,204.10854 1372.922,203.88519 1373.468,203.88519 C 1374.0139,203.88519 1374.4606,203.66184 1374.4606,203.38887 C 1374.4606,203.11589 1374.9073,202.89254 1375.4533,202.89254 C 1375.9992,202.89254 1376.4459,202.6692 1376.4459,202.39622 C 1376.4459,202.12324 1376.8926,201.8999 1377.4386,201.8999 C 1377.9845,201.8999 1378.4312,201.67655 1378.4312,201.40357 C 1378.4312,201.13059 1379.5479,200.90725 1380.9128,200.90725 C 1382.2777,200.90725 1383.3945,200.6839 1383.3945,200.41093 C 1383.3945,200.13795 1383.6802,199.9146 1384.0294,199.9146 C 1384.3786,199.9146 1384.9863,199.46791 1385.3797,198.92196 C 1386.1289,197.88249 1387.365,197.57346 1387.365,198.42563 C 1387.365,198.69861 1388.4818,198.92196 1389.8467,198.92196 C 1391.2116,198.92196 1392.3283,199.1453 1392.3283,199.41828 C 1392.3283,199.72553 1394.9753,199.9146 1399.2768,199.9146 C 1403.5783,199.9146 1406.2253,200.10368 1406.2253,200.41093 C 1406.2253,200.72567 1409.9478,200.90725 1416.4,200.90725 C 1422.8522,200.90725 1426.5746,201.08883 1426.5746,201.40357 C 1426.5746,201.69309 1428.229,201.8999 1430.5452,201.8999 C 1432.8614,201.8999 1434.5158,202.1067 1434.5158,202.39622 C 1434.5158,202.6692 1435.1858,202.89254 1436.0047,202.89254 C 1436.8237,202.89254 1437.4937,203.11589 1437.4937,203.38887 C 1437.4937,203.66184 1437.9404,203.88519 1438.4864,203.88519 C 1439.0323,203.88519 1439.479,204.10854 1439.479,204.38151 C 1439.479,204.68694 1441.9606,204.87784 1445.9312,204.87784 C 1449.9018,204.87784 1452.3834,205.06873 1452.3834,205.37416 C 1452.3834,205.66093 1453.9551,205.87048 1456.1059,205.87048 C 1458.2566,205.87048 1459.8283,205.66093 1459.8283,205.37416 C 1459.8283,205.10118 1460.275,204.87784 1460.8209,204.87784 C 1461.3669,204.87784 1461.8136,204.65449 1461.8136,204.38151 C 1461.8136,204.08372 1463.7989,203.88519 1466.7768,203.88519 C 1469.7547,203.88519 1471.74,203.68666 1471.74,203.38887 C 1471.74,203.11589 1472.2984,202.89254 1472.9809,202.89254 C 1473.6633,202.89254 1474.2217,203.11589 1474.2217,203.38887 C 1474.2217,204.32206 1475.3115,203.88612 1476.7033,202.39622 C 1477.9284,201.08472 1478.4254,200.90725 1480.873,200.90725 C 1482.4013,200.90725 1483.6518,200.6839 1483.6518,200.41093 C 1483.6518,200.13795 1483.9868,199.9146 1484.3963,199.9146 C 1484.8058,199.9146 1485.1408,200.13795 1485.1408,200.41093 C 1485.1408,200.6839 1485.6805,200.90725 1486.3402,200.90725 C 1486.9999,200.90725 1487.6699,201.18643 1487.8292,201.52765 C 1488.0608,202.02398 1488.1766,202.02398 1488.4082,201.52765 C 1488.5675,201.18643 1489.3651,200.90725 1490.1808,200.90725 C 1491.4991,200.90725 1491.5812,200.98997 1490.9194,201.65173 C 1490.51,202.0612 1489.6006,202.39622 1488.8986,202.39622 C 1488.0693,202.39622 1487.6224,202.66933 1487.6224,203.17616 C 1487.6224,204.27098 1486.3947,205.37416 1485.1762,205.37416 C 1484.6108,205.37416 1484.1481,205.59751 1484.1481,205.87048 C 1484.1481,206.14346 1483.7014,206.36681 1483.1555,206.36681 C 1482.6095,206.36681 1482.1628,206.59015 1482.1628,206.86313 C 1482.1628,207.17038 1479.5158,207.35946 1475.2143,207.35946 C 1470.9128,207.35946 1468.2658,207.54853 1468.2658,207.85578 C 1468.2658,208.17198 1464.2069,208.3521 1457.082,208.3521 L 1445.8981,208.3521 L 1444.1776,210.07269 C 1443.2312,211.01901 1442.457,212.08644 1442.457,212.44474 C 1442.457,212.80304 1442.0103,213.41816 1441.4643,213.81166 C 1440.9184,214.20517 1440.4717,215.03618 1440.4717,215.65836 C 1440.4717,216.28054 1440.2483,216.7896 1439.9753,216.7896 C 1439.7024,216.7896 1439.479,217.13207 1439.479,217.55063 C 1439.479,218.80104 1436.1786,221.75284 1434.7805,221.75284 C 1434.0889,221.75284 1433.5231,221.52949 1433.5231,221.25651 C 1433.5231,220.96699 1431.8687,220.76019 1429.5525,220.76019 C 1427.2363,220.76019 1425.582,220.96699 1425.582,221.25651 C 1425.582,221.52949 1424.6886,221.75284 1423.5967,221.75284 C 1422.5047,221.75284 1421.6114,221.52949 1421.6114,221.25651 C 1421.6114,220.95571 1419.4606,220.76019 1416.1518,220.76019 C 1412.843,220.76019 1410.6922,220.56467 1410.6922,220.26387 C 1410.6922,219.99089 1410.0222,219.76754 1409.2033,219.76754 C 1408.3843,219.76754 1407.7143,219.5442 1407.7143,219.27122 C 1407.7143,218.98761 1406.2253,218.7749 1404.24,218.7749 C 1402.2547,218.7749 1400.7658,218.56219 1400.7658,218.27857 C 1400.7658,217.97921 1398.6977,217.78225 1395.5544,217.78225 C 1392.411,217.78225 1390.343,217.97921 1390.343,218.27857 C 1390.343,218.55155 1389.6729,218.7749 1388.854,218.7749 C 1388.0351,218.7749 1387.365,218.99824 1387.365,219.27122 C 1387.365,219.5442 1386.2483,219.76754 1384.8834,219.76754 C 1383.5185,219.76754 1382.4018,219.5442 1382.4018,219.27122 C 1382.4018,218.99824 1381.9551,218.7749 1381.4092,218.7749 C 1380.8632,218.7749 1380.4165,218.99824 1380.4165,219.27122 C 1380.4165,219.5442 1379.5231,219.76754 1378.4312,219.76754 C 1377.3393,219.76754 1376.4459,219.99089 1376.4459,220.26387 C 1376.4459,220.53684 1375.7759,220.76019 1374.957,220.76019 C 1374.138,220.76019 1373.468,220.98354 1373.468,221.25651 C 1373.468,221.52949 1373.0213,221.75284 1372.4753,221.75284 C 1371.9294,221.75284 1371.4827,221.97618 1371.4827,222.24916 C 1371.4827,222.53278 1369.9937,222.74548 1368.0084,222.74548 C 1366.0231,222.74548 1364.5342,222.95819 1364.5342,223.24181 C 1364.5342,223.51479 1364.0875,223.73813 1363.5415,223.73813 C 1362.9956,223.73813 1362.5489,223.96148 1362.5489,224.23446 C 1362.5489,224.50743 1362.1022,224.73078 1361.5562,224.73078 C 1360.3534,224.73078 1360.166,226.88576 1361.2726,227.99233 C 1362.1776,228.89736 1367.305,228.96786 1367.7189,228.08096 C 1367.9505,227.58464 1368.0663,227.58464 1368.2979,228.08096 C 1368.4572,228.42218 1369.0156,228.70137 1369.5387,228.70137 C 1370.2649,228.70137 1370.49,229.05383 1370.49,230.19034 C 1370.49,231.00927 1370.2667,231.67931 1369.9937,231.67931 C 1369.7207,231.67931 1369.4974,232.126 1369.4974,232.67196 C 1369.4974,233.21791 1369.7207,233.6646 1369.9937,233.6646 C 1370.2667,233.6646 1370.49,234.11129 1370.49,234.65725 C 1370.49,235.20321 1370.7134,235.6499 1370.9864,235.6499 C 1371.2593,235.6499 1371.4827,236.76662 1371.4827,238.13151 C 1371.4827,240.28225 1371.3503,240.61313 1370.49,240.61313 C 1369.9441,240.61313 1369.4974,240.83648 1369.4974,241.10946 C 1369.4974,242.21351 1366.8724,241.55726 1365.5268,240.11681 C 1364.2019,238.69849 1363.9444,238.62784 1360.0998,238.62784 C 1356.1561,238.62784 1356.0241,238.6673 1354.343,240.34843 L 1352.6224,242.06901 L 1352.6224,248.53777 C 1352.6224,252.51938 1352.8132,255.00651 1353.1187,255.00651 C 1353.3917,255.00651 1353.615,255.56488 1353.615,256.24732 C 1353.615,256.92977 1353.3917,257.48813 1353.1187,257.48813 C 1352.8457,257.48813 1352.6224,258.0465 1352.6224,258.72894 C 1352.6224,259.77673 1352.854,259.96975 1354.1114,259.96975 C 1354.9303,259.96975 1355.6003,260.19309 1355.6003,260.46607 C 1355.6003,261.23875 1360.0419,261.05868 1360.8472,260.25336 C 1361.6506,259.44991 1361.8179,256.49548 1361.0599,256.49548 C 1360.7869,256.49548 1360.5636,255.71377 1360.5636,254.75835 C 1360.5636,253.80293 1360.7869,253.02122 1361.0599,253.02122 C 1361.3329,253.02122 1361.5562,252.46286 1361.5562,251.78041 C 1361.5562,251.09797 1361.3329,250.5396 1361.0599,250.5396 C 1360.7869,250.5396 1360.5636,249.86957 1360.5636,249.05063 C 1360.5636,248.2317 1360.3402,247.56166 1360.0672,247.56166 C 1359.7943,247.56166 1359.5709,246.89162 1359.5709,246.07269 C 1359.5709,244.9146 1359.7915,244.58372 1360.5636,244.58372 C 1361.1095,244.58372 1361.5562,244.36037 1361.5562,244.0874 C 1361.5562,243.17753 1363.0752,243.57594 1364.3086,244.80932 C 1364.9786,245.47936 1365.5268,246.37274 1365.5268,246.79462 C 1365.5268,247.3842 1366.101,247.56166 1368.0084,247.56166 C 1369.3733,247.56166 1370.49,247.33832 1370.49,247.06534 C 1370.49,246.79236 1371.2893,246.56901 1372.2661,246.56901 C 1373.6893,246.56901 1374.421,246.17467 1375.9496,244.58372 C 1377.7486,242.71129 1379.4239,241.99333 1379.4239,243.09475 C 1379.4239,243.36773 1379.6472,243.59107 1379.9202,243.59107 C 1380.1932,243.59107 1380.4165,242.92104 1380.4165,242.1021 C 1380.4165,241.28317 1380.1932,240.61313 1379.9202,240.61313 C 1379.2037,240.61313 1379.3084,238.76444 1380.0443,238.42103 C 1380.5406,238.18942 1380.5406,238.07361 1380.0443,237.84199 C 1379.4506,237.56494 1379.1326,234.65725 1379.696,234.65725 C 1379.8456,234.65725 1381.51,236.22067 1383.3945,238.13151 C 1385.2789,240.04236 1387.0709,241.60578 1387.3766,241.60578 C 1388.1876,241.60578 1389.3503,242.90055 1389.3503,243.80378 C 1389.3503,244.3395 1389.8166,244.58372 1390.8393,244.58372 C 1392.1365,244.58372 1392.3283,244.76133 1392.3283,245.96312 C 1392.3283,246.77316 1392.738,247.63784 1393.3209,248.05798 C 1393.9039,248.47813 1394.3136,249.34281 1394.3136,250.15285 C 1394.3136,251.20137 1394.0755,251.53225 1393.3209,251.53225 C 1392.367,251.53225 1392.3283,251.86313 1392.3283,260.0052 C 1392.3283,268.80497 1392.5708,269.89622 1394.5263,269.89622 C 1394.9553,269.89622 1395.3062,270.29361 1395.3062,270.7793 C 1395.3062,271.26499 1395.7529,271.98433 1396.2989,272.37784 C 1397.0549,272.92275 1397.2915,273.66267 1397.2915,275.48189 C 1397.2915,277.54557 1397.0574,278.10453 1395.5709,279.59107 C 1394.6246,280.5374 1393.5079,281.31166 1393.0893,281.31166 C 1392.6707,281.31166 1392.3283,281.53501 1392.3283,281.80798 C 1392.3283,282.11523 1389.6812,282.30431 1385.3797,282.30431 C 1379.5341,282.30431 1378.4312,282.42248 1378.4312,283.04879 C 1378.4312,283.45826 1378.2079,283.79328 1377.9349,283.79328 C 1377.6619,283.79328 1377.4386,284.23997 1377.4386,284.78593 C 1377.4386,285.40664 1377.1077,285.77857 1376.5555,285.77857 C 1376.0698,285.77857 1375.3504,285.33188 1374.957,284.78593 z M 1200.7474,237.13887 C 1200.7474,236.86589 1200.4124,236.64254 1200.0029,236.64254 C 1199.5934,236.64254 1199.2584,236.86589 1199.2584,237.13887 C 1199.2584,237.41184 1199.5934,237.63519 1200.0029,237.63519 C 1200.4124,237.63519 1200.7474,237.41184 1200.7474,237.13887 z"
		id="path3050"
	/>
);

Sucre.propTypes = {
	isActive: PropTypes.bool
}

Sucre.defaultProps = {
	isActive: false
}

export default Sucre