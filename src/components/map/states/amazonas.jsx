import React from 'react'
import PropTypes from 'prop-types'

const Amazonas = ({ isActive }) => (
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
		d="M 1031.4944,1486.1487 C 1031.4944,1484.1341 1033.2812,1480.8688 1035.465,1478.8925 C 1041.2716,1473.6375 1040.8871,1459.9558 1034.7317,1452.7996 C 1030.8278,1448.2612 1028.2826,1447.2755 1019.7697,1447.0054 C 1006.9381,1446.5983 989.4799,1454.3614 980.6753,1464.3894 C 977.3126,1468.2193 971.9604,1472.0021 968.7816,1472.7957 C 965.6027,1473.5893 961.455,1475.6324 959.5648,1477.3359 C 956.7632,1479.8605 955.5682,1479.9689 953.1017,1477.9218 C 951.1376,1476.2918 947.3328,1475.8492 942.2586,1476.6605 C 934.7915,1477.8546 933.7475,1477.3103 918.9421,1464.5059 C 910.4177,1457.1332 898.7737,1446.726 893.0668,1441.3785 C 887.3599,1436.0312 880.1336,1430.1009 877.0084,1428.2004 C 868.6852,1423.1387 862.7444,1414.6711 862.7444,1407.8694 C 862.7444,1404.5882 861.4315,1400.9119 859.8269,1399.6996 C 858.1843,1398.4586 855.9301,1391.0865 854.6684,1382.8289 C 853.4359,1374.7623 850.7318,1365.3818 848.6595,1361.9833 C 846.5871,1358.5848 844.8883,1353.8469 844.8842,1351.4545 C 844.8801,1349.0622 844.1007,1346.6252 843.1522,1346.039 C 842.2038,1345.4528 840.8717,1341.4959 840.1921,1337.2458 C 839.5124,1332.9958 837.6083,1328.3997 835.96072,1327.0323 C 834.13436,1325.5165 832.96501,1321.192 832.96501,1315.954 C 832.96501,1310.8335 831.87887,1306.7204 830.27688,1305.7742 C 823.58632,1301.8228 820.93391,1288.6425 825.39248,1281.5032 C 827.36243,1278.3488 826.86009,1276.5719 822.31351,1270.611 C 819.32534,1266.6934 816.12572,1263.4881 815.20314,1263.4881 C 814.28053,1263.4881 806.28444,1256.3243 797.43404,1247.5685 C 783.66378,1233.9455 780.6268,1231.8286 776.38166,1232.8941 C 772.07119,1233.9759 771.42089,1233.4815 771.42089,1229.123 C 771.42089,1220.0338 769.48719,1217.8263 761.52511,1217.8263 C 757.34043,1217.8263 752.96484,1216.5315 751.60257,1214.8901 C 749.78152,1212.6959 748.2046,1212.4683 745.36257,1213.9893 C 731.06349,1221.6419 746.75583,1203.0474 771.42089,1183.1117 C 776.33449,1179.1402 781.92834,1174.6058 783.85167,1173.0351 C 785.77504,1171.4644 788.45515,1170.1792 789.80755,1170.1792 C 792.32685,1170.1791 801.48503,1159.7591 807.61105,1149.9228 C 811.83624,1143.1385 809.54358,1135.2534 802.57551,1132.6041 C 796.73428,1130.3833 791.27383,1122.2261 791.27383,1115.7209 C 791.27383,1112.9897 789.72943,1107.5165 787.84181,1103.5581 C 784.60898,1096.7789 783.98441,1096.4291 777.0816,1097.5329 L 769.75344,1098.7048 L 766.37246,1088.2839 C 764.51304,1082.5525 762.20807,1077.0144 761.25039,1075.9771 C 757.99268,1072.4485 759.41994,1067.2332 763.82053,1066.5857 C 768.73892,1065.862 771.32008,1060.9881 766.78491,1060.9881 C 762.9248,1060.9881 747.59736,1047.2478 747.59736,1043.7874 C 747.59736,1042.3286 746.70398,1041.1351 745.61207,1041.1351 C 743.02005,1041.1351 743.05058,1030.039 745.65602,1025.1707 C 747.23814,1022.2144 746.2793,1018.4954 741.30392,1008.2912 C 734.99751,995.3571 734.95445,995.0709 737.63801,983.9229 C 739.13147,977.7187 740.62284,966.3888 740.9521,958.7454 C 741.83534,938.2408 741.9867,937.2566 744.91183,932.9912 C 746.38889,930.8374 747.59736,926.5336 747.59736,923.4273 C 747.59736,918.7764 746.92961,917.9913 743.8148,918.9799 C 740.45786,920.0453 739.95525,918.9537 739.34789,909.2796 C 738.8466,901.2954 739.54548,897.29162 741.9597,894.31582 C 743.77261,892.08112 745.75659,890.25282 746.36858,890.25282 C 746.98061,890.25282 751.40873,887.4845 756.20895,884.10099 L 764.93658,877.94917 L 765.9377,860.39203 C 766.7536,846.08179 767.91939,841.16152 772.24143,833.78649 C 775.15789,828.80987 778.6956,824.73811 780.10292,824.73811 C 781.51025,824.73811 783.81675,822.5799 785.22845,819.9421 C 786.64021,817.3043 789.50694,814.69846 791.59908,814.15135 C 794.65528,813.35211 795.14188,812.05101 794.07472,807.53192 C 793.34417,804.43832 791.96844,801.05851 791.01751,800.0212 C 787.72782,796.43274 789.34543,795.91815 802.4395,796.38777 C 812.31054,796.74183 816.25592,797.73646 818.2587,800.37597 C 821.83827,805.09362 821.74448,819.24069 818.0753,828.02226 C 811.91511,842.76567 816.27928,855.48009 825.692,850.21247 C 830.19284,847.69367 835.69737,849.70713 834.29581,853.35956 C 832.24925,858.69273 842.1152,858.78916 852.0013,853.53266 C 859.3083,849.64756 864.2675,848.56164 874.7036,848.56164 C 894.9937,848.56164 899.1287,847.08093 914.1512,834.43572 C 921.7849,828.01007 928.8497,822.75282 929.8509,822.75282 C 930.8521,822.75282 932.4669,827.44307 933.4395,833.17561 C 935.1249,843.11022 935.5164,843.62802 941.8004,844.231 C 945.4647,844.58261 950.5041,843.48034 953.146,841.74938 C 955.76,840.03659 960.8068,838.63517 964.3609,838.63517 C 972.4591,838.63517 978.5869,831.84759 988.9871,811.35778 C 996.7173,796.12827 1000.5588,792.9734 1011.3737,792.9734 C 1021.7266,792.9734 1024.1425,800.22396 1018.3828,814.00899 C 1014.4062,823.52603 1015.3606,842.63778 1020.0461,847.32339 C 1025.0456,852.32288 1032.2048,851.24115 1038.1301,844.59105 C 1042.7602,839.39466 1044.764,838.63904 1053.8443,838.66556 C 1066.0926,838.70132 1071.4862,841.12868 1067.7094,844.90544 C 1066.3536,846.2612 1065.2444,850.27652 1065.2444,853.82839 C 1065.2444,858.98386 1066.8587,861.58348 1073.2482,866.71819 C 1079.7375,871.9333 1080.6765,873.47198 1078.2114,874.85156 C 1073.9019,877.2632 1074.4417,885.29615 1079.1298,888.5217 C 1084.875,892.47462 1081.2493,896.65332 1070.8728,898.0381 C 1063.3143,899.0468 1062.1905,899.847 1061.6417,904.6103 C 1061.2471,908.0369 1062.8119,912.423 1065.8913,916.522 C 1068.5722,920.0905 1071.3985,926.137 1072.1721,929.9587 C 1073.7091,937.5507 1088.5913,966.2236 1094.3826,972.7509 C 1096.3733,974.9943 1098.9895,978.5678 1100.1967,980.692 C 1103.8112,987.0521 1114.1637,991.8147 1126.8815,992.9679 C 1141.0545,994.2531 1141.6415,995.0276 1143.5383,1014.9492 L 1144.9201,1029.4619 L 1138.9308,1026.3647 C 1131.1743,1022.3536 1129.5864,1022.4549 1124.7731,1027.2683 C 1121.8305,1030.211 1121.1132,1032.7051 1122.0618,1036.6985 C 1123.5371,1042.9098 1128.319,1049.0763 1131.6607,1049.0763 C 1132.91,1049.0763 1135.1276,1052.3827 1136.589,1056.4238 C 1138.0503,1060.4649 1142.1736,1066.9419 1145.7519,1070.8172 C 1149.3302,1074.6924 1155.4522,1081.5353 1159.3567,1086.0235 C 1163.7657,1091.0917 1170.0364,1095.5037 1175.9053,1097.6669 C 1187.0855,1101.7878 1202.2595,1116.4376 1202.1666,1123.0211 C 1202.1321,1125.482 1200.7972,1129.2222 1199.2006,1131.3328 C 1196.8623,1134.4239 1196.5377,1139.6357 1197.5315,1158.1342 C 1198.5889,1177.8169 1199.3822,1181.8076 1203.0836,1186.0616 C 1205.4586,1188.7914 1209.9515,1195.0451 1213.0677,1199.9587 C 1216.1838,1204.8723 1220.4254,1211.374 1222.4932,1214.407 C 1227.9862,1222.4628 1229.3647,1237.7801 1225.173,1244.1778 C 1223.0972,1247.3459 1222.0624,1252.1741 1222.4502,1256.8841 C 1223.0513,1264.1881 1223.3803,1264.5056 1230.9913,1265.125 C 1235.345,1265.4793 1240.1727,1266.8194 1241.7192,1268.1029 C 1243.5888,1269.6546 1254.3894,1270.4516 1273.9509,1270.4814 C 1293.9398,1270.5118 1304.1256,1271.2809 1305.7255,1272.8808 C 1308.7709,1275.9264 1309.9609,1286.7526 1307.4227,1288.3214 C 1306.3459,1288.9868 1305.465,1291.6003 1305.465,1294.1292 C 1305.465,1298.8422 1299.7488,1301.2087 1288.3641,1301.2087 C 1285.783,1301.2087 1278.5242,1305.0971 1272.2336,1309.8496 C 1261.7772,1317.7492 1259.5295,1318.5935 1246.0361,1319.6913 C 1225.221,1321.3847 1221.7432,1325.0942 1220.1609,1347.2899 C 1219.5159,1356.3404 1217.8032,1365.5322 1216.3549,1367.716 C 1214.9068,1369.8999 1208.8922,1375.0823 1202.9891,1379.2325 C 1194.2242,1385.3949 1192.0396,1386.2139 1191.0748,1383.6994 C 1190.2916,1381.6588 1187.4542,1380.6649 1182.6607,1380.7522 C 1174.2421,1380.9056 1158.9605,1390.94 1155.1056,1398.846 C 1151.7229,1405.7835 1136.9705,1415.42 1134.1107,1412.5602 C 1130.4637,1408.9132 1122.6959,1410.1496 1116.5,1415.3631 C 1113.2558,1418.0929 1109.4685,1420.3263 1108.0837,1420.3263 C 1106.699,1420.3263 1103.9487,1422.1131 1101.9724,1424.2969 C 1099.9831,1426.4951 1095.8577,1428.2675 1092.7308,1428.2675 C 1085.3025,1428.2675 1079.6509,1434.1893 1078.1528,1443.5428 C 1076.2892,1455.1779 1074.5747,1457.1331 1066.8412,1456.4427 C 1061.0241,1455.9235 1059.037,1456.9476 1053.6696,1463.2313 C 1050.1931,1467.3013 1046.4314,1474.0383 1045.3101,1478.2024 C 1042.6252,1488.1733 1031.4944,1494.5754 1031.4944,1486.1487 L 1031.4944,1486.1487 z"
		id="path2919"
	/>
);

Amazonas.propTypes = {
	isActive: PropTypes.bool
}

Amazonas.defaultProps = {
	isActive: false
}

export default Amazonas