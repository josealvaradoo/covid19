import React from 'react'
import PropTypes from 'prop-types'

const Monagas = ({ isActive }) => (
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
		d="M 1396.7388,491.0613 C 1396.3255,490.2892 1395.5248,489.65748 1394.9593,489.65748 C 1394.3938,489.65748 1393.9311,489.1499 1393.9311,488.52952 C 1393.9311,487.81527 1393.5449,487.54975 1392.8783,487.80559 C 1392.1747,488.07555 1391.8254,487.77605 1391.8254,486.90291 C 1391.8254,485.53209 1390.5235,484.74413 1388.2585,484.74413 C 1387.5179,484.74413 1386.9121,484.42827 1386.9121,484.04222 C 1386.9121,483.65617 1385.8188,483.34031 1384.4827,483.34031 C 1382.9582,483.34031 1381.5668,482.81805 1380.747,481.9381 C 1379.7563,480.87463 1378.1387,480.42582 1374.0516,480.08033 C 1371.0875,479.82979 1368.6625,479.36616 1368.6625,479.05005 C 1368.6625,478.73395 1367.0832,478.26581 1365.1529,478.00975 C 1363.2227,477.7537 1361.6434,477.26903 1361.6434,476.93272 C 1361.6434,476.59642 1361.1597,476.32124 1360.5685,476.32124 C 1359.9773,476.32124 1359.3118,475.84745 1359.0896,475.26838 C 1358.8674,474.6893 1358.0087,474.21121 1357.1814,474.20594 C 1356.3541,474.20066 1355.0041,474.01573 1354.1814,473.79496 C 1352.6224,473.3766 1352.6313,473.41357 1351.37,462.10761 L 1350.9198,458.07164 L 1354.8644,458.07164 C 1358.4488,458.07164 1358.8478,457.91697 1359.2342,456.3777 C 1359.4874,455.36858 1360.3441,454.51188 1361.3533,454.25861 C 1362.8273,453.88865 1363.0472,453.42687 1363.0472,450.70162 C 1363.0472,448.00454 1362.8195,447.51262 1361.4067,447.15804 C 1358.3655,446.39474 1333.5671,448.03576 1333.5671,449.0003 C 1333.5671,449.35696 1331.1981,449.64875 1328.3028,449.64875 C 1325.4074,449.64875 1323.0385,449.39635 1323.0385,449.08785 C 1323.0385,448.77935 1321.854,448.10313 1320.4063,447.58512 C 1317.1107,446.40589 1316.7454,445.84138 1316.7321,441.90829 C 1316.7243,439.60802 1316.3336,438.39823 1315.3175,437.52824 C 1314.3469,436.69721 1313.9137,435.45765 1313.9137,433.51175 C 1313.9137,431.96377 1313.6373,430.69725 1313.2995,430.69725 C 1312.9617,430.69725 1312.4958,429.74968 1312.2642,428.59153 C 1311.9119,426.83 1311.5088,426.48581 1309.7979,426.48581 C 1308.0124,426.48581 1307.6936,426.17074 1307.2872,424.00429 C 1306.9058,421.97145 1306.4475,421.44795 1304.7524,421.10892 C 1303.6143,420.88131 1302.6832,420.4187 1302.6832,420.0809 C 1302.6832,419.74311 1302.1995,419.46673 1301.6083,419.46673 C 1301.0171,419.46673 1300.3574,419.00811 1300.1423,418.44756 C 1299.9272,417.88701 1298.3911,417.22443 1296.7288,416.97514 C 1294.1009,416.58107 1293.6532,416.25603 1293.299,414.48478 C 1293.0103,413.04134 1292.4773,412.44766 1291.4702,412.44766 C 1290.6828,412.44766 1290.0488,411.984 1290.0488,411.40817 C 1290.0488,410.83646 1289.2935,410.17912 1288.3704,409.94743 C 1287.2532,409.66702 1286.5613,408.87291 1286.3012,407.57243 C 1286.0032,406.08218 1285.3988,405.51634 1283.7536,405.1873 C 1282.0551,404.84761 1281.5062,404.30334 1281.1708,402.62647 C 1280.8832,401.18821 1280.2241,400.36632 1279.1405,400.09435 C 1278.2178,399.86276 1277.3555,398.97197 1277.111,397.99773 C 1276.8037,396.77342 1276.2004,396.30379 1274.9349,396.30379 C 1272.8819,396.30379 1270.733,395.17226 1268.6031,392.96973 C 1267.7631,392.10112 1266.4137,391.39043 1265.6044,391.39043 C 1264.7951,391.39043 1263.5679,390.79791 1262.8773,390.07371 C 1262.1866,389.34951 1260.9109,388.53858 1260.0423,388.27164 C 1259.1737,388.00469 1258.463,387.49172 1258.463,387.13169 C 1258.463,386.05489 1252.8387,386.38583 1251.6946,387.52994 C 1251.1155,388.10902 1249.765,388.58281 1248.6935,388.58281 C 1247.622,388.58281 1245.9932,389.23513 1245.0739,390.03242 C 1243.8352,391.10679 1243.3265,391.24306 1243.1088,390.55885 C 1242.9473,390.0511 1242.3877,389.38308 1241.8652,389.07436 C 1241.3428,388.76563 1240.9153,388.21289 1240.9153,387.84602 C 1240.9153,387.47915 1240.2836,386.54727 1239.5115,385.77518 C 1238.7394,385.00308 1238.1077,383.58171 1238.1077,382.61659 C 1238.1077,381.65147 1237.7978,380.86182 1237.4191,380.86182 C 1237.0404,380.86182 1236.5324,380.07218 1236.2902,379.10705 C 1236.0479,378.14193 1235.5681,377.35229 1235.2239,377.35229 C 1234.8797,377.35229 1234.5981,376.89419 1234.5981,376.3343 C 1234.5981,375.77442 1234.1333,375.05617 1233.5651,374.73821 C 1231.838,373.77168 1231.7909,366.82367 1233.5115,366.82367 C 1234.072,366.82367 1235.6042,365.71817 1236.9164,364.367 C 1238.2287,363.01583 1239.7589,361.91032 1240.317,361.91032 C 1241.4053,361.91032 1243.8786,360.22135 1245.7134,358.22531 C 1246.3344,357.54972 1247.1014,356.99697 1247.4178,356.99697 C 1247.7342,356.99697 1248.6522,356.38293 1249.4577,355.63245 C 1250.6914,354.48313 1250.8723,353.66386 1250.6047,350.43764 C 1250.3541,347.41538 1249.8538,346.1532 1248.2333,344.4545 C 1244.5225,340.56461 1244.1389,339.92979 1243.7534,337.04251 C 1243.4258,334.5885 1243.1087,334.15451 1241.5077,333.96925 C 1240.2096,333.81902 1239.5128,333.23285 1239.2131,332.039 C 1238.9765,331.09601 1238.394,330.31903 1237.9188,330.31236 C 1237.4436,330.30568 1236.3093,329.5143 1235.3981,328.55373 C 1234.0486,327.13107 1233.8268,326.35239 1234.2016,324.35441 C 1234.4547,323.00535 1234.9633,321.9016 1235.3318,321.9016 C 1235.7004,321.9016 1236.0019,320.01005 1236.0019,317.69817 C 1236.0019,313.31256 1234.6929,310.67527 1232.5119,310.66702 C 1231.6733,310.66385 1231.4295,309.73405 1231.3936,306.40159 C 1231.3684,304.05784 1231.0295,301.92761 1230.6405,301.66777 C 1230.2516,301.40792 1229.7124,300.59832 1229.4424,299.86864 C 1229.0098,298.6995 1228.4324,298.58916 1224.5802,298.93949 C 1222.1761,299.15814 1220.6039,299.17608 1221.0864,298.97935 C 1222.1233,298.55662 1222.2844,293.8253 1221.2619,293.8253 C 1220.8758,293.8253 1220.56,292.90934 1220.56,291.78984 C 1220.56,289.75651 1220.5661,289.75374 1226.3507,289.15768 C 1232.0597,288.56942 1232.1447,288.53221 1232.3739,286.52366 C 1232.6861,283.78667 1233.8332,282.78862 1237.8674,281.74366 C 1239.7368,281.25946 1241.4242,280.66911 1241.6172,280.43178 C 1241.8102,280.19445 1243.346,279.78499 1245.0301,279.52186 C 1247.2235,279.17914 1248.763,278.35253 1250.4575,276.60767 C 1251.7585,275.26799 1253.3023,274.17189 1253.8882,274.17189 C 1254.5601,274.17189 1254.9534,273.51572 1254.9534,272.39509 C 1254.9534,271.41786 1255.3918,270.45009 1255.9275,270.2445 C 1256.4633,270.03891 1257.0871,268.94332 1257.3138,267.80985 L 1257.726,265.749 L 1263.6596,265.749 C 1268.3632,265.749 1269.8466,265.49567 1270.8153,264.52693 C 1271.694,263.64822 1272.119,263.54961 1272.3277,264.17597 C 1272.6481,265.13716 1277.4145,265.40099 1277.4145,264.45753 C 1277.4145,264.13327 1278.6779,263.451 1280.2221,262.94137 C 1281.7663,262.43173 1283.0297,261.79792 1283.0297,261.53288 C 1283.0297,260.07674 1288.1152,256.04624 1290.5222,255.59469 C 1291.9973,255.31795 1293.437,254.72571 1293.7215,254.27858 C 1294.0567,253.75179 1294.2425,253.89801 1294.2495,254.69396 C 1294.2554,255.36954 1294.7341,255.92229 1295.3131,255.92229 C 1296.0056,255.92229 1296.366,256.6151 1296.366,257.94615 C 1296.366,260.15375 1297.6025,260.8084 1301.8058,260.82606 C 1303.0604,260.83134 1304.087,261.1515 1304.087,261.53755 C 1304.087,261.9236 1304.9185,262.23946 1305.9349,262.23946 C 1307.8324,262.23946 1310.4041,264.52267 1310.4041,266.20735 C 1310.4041,266.8577 1311.3744,267.15281 1313.5126,267.15281 C 1315.3398,267.15281 1317.055,267.58679 1317.6739,268.20567 C 1318.2599,268.79168 1319.9756,269.25854 1321.5431,269.25854 C 1323.0921,269.25854 1324.5546,269.57439 1324.7932,269.96044 C 1325.0318,270.34649 1325.9981,270.66235 1326.9404,270.66235 C 1327.8827,270.66235 1328.6537,270.97821 1328.6537,271.36426 C 1328.6537,272.33846 1330.5815,272.24893 1330.9114,271.25941 C 1331.2874,270.13149 1337.9308,270.06802 1338.3047,271.18878 C 1338.4657,271.67134 1339.1712,272.06617 1339.8726,272.06617 C 1341.3863,272.06617 1346.2014,276.68109 1346.2014,278.13192 C 1346.2014,279.35226 1348.1917,281.50057 1349.8864,282.10942 C 1350.562,282.35213 1351.1148,282.97263 1351.1148,283.48828 C 1351.1148,284.6921 1356.8659,284.64383 1357.2683,283.43665 C 1357.6062,282.42306 1360.2396,282.29901 1360.2396,283.29668 C 1360.2396,283.68273 1361.1477,283.99859 1362.2576,283.99859 C 1363.9382,283.99859 1364.3459,284.35056 1364.6967,286.10431 C 1365.0691,287.96611 1365.4044,288.21004 1367.592,288.21004 C 1368.9529,288.21004 1370.0663,287.89418 1370.0663,287.50813 C 1370.0663,287.12208 1370.424,286.80622 1370.8613,286.80622 C 1371.7433,286.80622 1374.2777,289.48944 1374.2777,290.42316 C 1374.2777,290.75013 1375.506,291.01767 1377.0072,291.01767 C 1379.5709,291.01767 1379.7647,290.86845 1380.1976,288.56099 C 1380.6197,286.31131 1380.8647,286.10431 1383.1054,286.10431 C 1384.6329,286.10431 1385.7041,286.49991 1385.9563,287.15718 C 1386.3925,288.29384 1391.8254,288.70242 1391.8254,287.59856 C 1391.8254,287.26224 1393.4047,286.77758 1395.3349,286.52152 C 1397.7381,286.20272 1398.8445,285.73169 1398.8445,285.02728 C 1398.8445,284.4615 1399.3408,283.99859 1399.9475,283.99859 C 1402.3726,283.99859 1403.0508,282.16074 1403.212,275.15229 C 1403.3244,270.26406 1403.1241,268.22841 1402.5108,268.02394 C 1401.2867,267.61595 1401.4484,265.97736 1402.7624,265.47314 C 1404.7483,264.71109 1406.2302,265.01982 1407.4555,266.45091 C 1408.1166,267.223 1409.1343,267.85472 1409.7172,267.85472 C 1410.9349,267.85472 1413.1298,269.86873 1413.7916,271.59335 C 1414.0395,272.23945 1414.687,272.76807 1415.2304,272.76807 C 1415.9232,272.76807 1416.3156,273.94088 1416.5438,276.69317 C 1416.7228,278.85197 1417.2068,280.82681 1417.6192,281.0817 C 1418.0317,281.33659 1418.5911,282.72888 1418.8625,284.17568 C 1419.134,285.62248 1419.6367,286.80622 1419.9798,286.80622 C 1420.3229,286.80622 1420.6036,287.41538 1420.6036,288.1599 C 1420.6036,288.90443 1421.0746,289.98455 1421.6502,290.56017 C 1422.4493,291.35924 1422.4908,291.70311 1421.8257,292.01412 C 1421.134,292.33755 1421.1353,292.50584 1421.8319,292.83093 C 1422.3358,293.0661 1422.7093,294.535 1422.7093,296.28197 C 1422.7093,298.02894 1422.3358,299.49785 1421.8319,299.73302 C 1421.13,300.06057 1421.13,300.22436 1421.8319,300.55191 C 1422.3145,300.77711 1422.7093,301.40882 1422.7093,301.95572 C 1422.7093,302.50263 1423.3509,302.95009 1424.1352,302.95009 C 1424.9194,302.95009 1425.7704,303.50285 1426.0261,304.17843 C 1426.5961,305.68346 1428.002,307.16154 1428.8637,307.16154 C 1429.6932,307.16154 1431.1322,310.33117 1431.1322,312.15805 C 1431.1322,313.68427 1432.6615,315.58443 1433.8897,315.58443 C 1434.3034,315.58443 1434.6418,316.38399 1434.6418,317.36122 C 1434.6418,318.33847 1435.1155,319.31983 1435.6946,319.54204 C 1436.9675,320.03049 1437.0997,323.04552 1435.8701,323.54444 C 1435.2098,323.81234 1435.2533,324.0847 1436.0456,324.64504 C 1436.8941,325.24511 1436.7238,325.39173 1435.1682,325.40039 C 1434.1066,325.4063 1433.2379,325.67786 1433.2379,326.00387 C 1433.2379,326.32987 1432.4486,327.51434 1431.484,328.63602 C 1430.5194,329.75771 1429.7297,331.38612 1429.7292,332.25473 C 1429.7288,333.12334 1429.4125,333.83402 1429.0265,333.83402 C 1428.6405,333.83402 1428.3246,334.34891 1428.3246,334.97822 C 1428.3246,335.60753 1426.6149,337.81854 1424.5252,339.89158 C 1421.5786,342.81473 1420.2395,343.66073 1418.559,343.66073 C 1416.6402,343.66073 1416.3922,343.8918 1416.3922,345.67871 C 1416.3922,347.34142 1416.7486,347.76798 1418.4167,348.10162 C 1420.3896,348.49617 1420.4487,348.6363 1420.7281,353.58069 C 1420.904,356.69271 1421.3424,358.76404 1421.8621,358.93725 C 1422.3281,359.09258 1422.7093,359.64517 1422.7093,360.16522 C 1422.7093,360.68528 1423.42,361.21171 1424.2886,361.33507 C 1425.7338,361.54032 1425.8476,361.87208 1425.6281,365.24173 C 1425.4412,368.11305 1425.6344,369.01851 1426.5055,369.35279 C 1427.7233,369.82011 1428.0572,371.73703 1426.9208,371.73703 C 1426.5347,371.73703 1426.2189,372.18825 1426.2189,372.73975 C 1426.2189,373.29126 1425.6973,374.26404 1425.0599,374.9015 C 1424.237,375.72441 1423.8276,377.63894 1423.6483,381.50345 C 1423.3222,388.53325 1424.1268,389.60598 1430.2603,390.31784 C 1434.4673,390.8061 1434.6418,390.90444 1434.6418,392.78708 C 1434.6418,394.29312 1434.2349,394.84992 1432.887,395.1882 C 1431.52,395.5313 1431.1322,396.07835 1431.1322,397.66356 C 1431.1322,398.78278 1430.9224,400.2454 1430.6659,400.91384 C 1430.2659,401.9561 1430.4907,402.05684 1432.2452,401.62126 C 1433.3703,401.3419 1434.3961,400.82084 1434.5248,400.46333 C 1434.6535,400.10583 1435.2062,399.81332 1435.7531,399.81332 C 1436.931,399.81332 1437.1041,402.38509 1435.9522,402.76908 C 1435.5147,402.91491 1435.1199,404.046 1435.0748,405.28265 C 1435.0278,406.56876 1434.6172,407.53179 1434.1153,407.53271 C 1433.6328,407.53359 1433.2379,408.29763 1433.2379,409.23059 C 1433.2379,410.16354 1433.6328,411.11111 1434.1153,411.33631 C 1434.8172,411.66387 1434.8172,411.82764 1434.1153,412.1552 C 1433.6328,412.38039 1433.2379,412.84085 1433.2379,413.17843 C 1433.2379,414.09395 1438.3801,413.51592 1438.6972,412.56477 C 1439.3041,410.74404 1440.3452,411.85216 1439.9061,413.85147 C 1439.5416,415.51109 1439.6831,415.9572 1440.5742,415.9572 C 1441.1961,415.9572 1441.8867,416.43098 1442.1089,417.01006 C 1442.558,418.18042 1444.4685,418.46458 1444.4685,417.36101 C 1444.4685,416.97496 1444.9423,416.6591 1445.5213,416.6591 C 1446.1062,416.6591 1446.5742,416.03519 1446.5742,415.25529 C 1446.5742,414.47539 1447.0421,413.85147 1447.627,413.85147 C 1448.2061,413.85147 1448.6895,413.29872 1448.7012,412.62314 C 1448.7216,411.45329 1448.7567,411.45329 1449.438,412.62314 C 1449.9231,413.45581 1451.0225,413.85147 1452.8511,413.85147 C 1454.5558,413.85147 1455.692,414.22478 1455.938,414.86561 C 1456.451,416.20258 1461.1649,417.08923 1462.209,416.04515 C 1462.6434,415.61072 1463.6011,415.25529 1464.3374,415.25529 C 1465.2077,415.25529 1465.5416,414.9053 1465.292,414.2548 C 1465.0059,413.50949 1465.3896,413.31814 1466.7961,413.50454 C 1467.8345,413.64216 1469.0791,413.77652 1469.5617,413.80311 C 1470.8638,413.8749 1470.6241,417.07564 1469.2107,418.48929 C 1467.5611,420.1391 1467.612,427.26855 1469.2852,428.94177 C 1469.9198,429.57638 1470.439,430.65644 1470.439,431.3419 C 1470.439,432.45771 1471.1509,433.55416 1474.1104,436.99648 C 1475.2548,438.32767 1474.9369,439.60903 1472.9977,441.48015 C 1472.0501,442.39448 1471.1135,444.60713 1470.6001,447.14431 C 1469.6625,451.77824 1469.0487,452.43006 1465.608,452.44564 C 1463.3848,452.45571 1460.6123,454.46896 1460.6123,456.07332 C 1460.6123,456.40029 1459.8336,456.66783 1458.8818,456.66783 C 1457.9056,456.66783 1456.2122,457.58571 1454.9971,458.77355 C 1453.8123,459.9317 1452.2728,460.87927 1451.576,460.87927 C 1450.8792,460.87927 1449.9492,461.66892 1449.5096,462.63404 C 1449.0698,463.59917 1448.2493,464.38881 1447.6862,464.38881 C 1446.9067,464.38881 1446.7583,464.97944 1447.0641,466.86419 L 1447.4658,469.33956 L 1445.4553,468.57517 C 1443.9853,468.01626 1443.3742,468.02254 1443.1822,468.59855 C 1442.5801,470.4051 1439.5927,472.83929 1437.4525,473.26732 C 1436.0627,473.54529 1435.0227,474.23855 1434.8173,475.02387 C 1434.6307,475.73742 1434.1765,476.32124 1433.8078,476.32124 C 1433.4393,476.32124 1432.7021,476.75678 1432.1698,477.28911 C 1431.5351,477.92389 1429.4428,478.27354 1426.0906,478.30508 C 1423.1793,478.33248 1420.8731,478.6712 1420.7329,479.09198 C 1420.5974,479.49831 1419.7419,479.83078 1418.8318,479.83078 C 1417.9216,479.83078 1416.9817,480.14663 1416.7431,480.53268 C 1416.5045,480.91873 1415.6962,481.23459 1414.9469,481.23459 C 1414.1976,481.23459 1413.5845,481.54443 1413.5845,481.92313 C 1413.5845,482.30181 1412.8178,482.80411 1411.8806,483.03934 C 1410.9434,483.27455 1410.0057,483.91228 1409.7968,484.45652 C 1409.5879,485.00076 1409.0913,485.44604 1408.6932,485.44604 C 1407.7905,485.44604 1405.1616,488.02331 1405.1616,488.90827 C 1405.1616,489.2683 1404.4657,489.78377 1403.6151,490.05374 C 1402.7645,490.32373 1401.6364,490.97671 1401.1083,491.50485 C 1399.7164,492.8967 1397.6064,492.68253 1396.7388,491.0613 z"
		id="path2986"
	/>
);

Monagas.propTypes = {
	isActive: PropTypes.bool
}

Monagas.defaultProps = {
	isActive: false
}

export default Monagas