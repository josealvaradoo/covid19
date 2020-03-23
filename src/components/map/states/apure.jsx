import React from 'react'
import PropTypes from 'prop-types'

const Apure = ({ isActive }) => (
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
		d="M 546.98255,790.80102 C 544.75891,786.64613 544.49508,786.63793 532.68927,790.35681 C 530.41617,791.07284 529.21501,790.39977 529.21501,788.41001 C 529.21501,786.73736 526.53486,782.83917 523.25912,779.74739 C 519.98339,776.65564 517.30324,773.40271 517.30324,772.51868 C 517.30324,771.63467 514.79194,768.50491 511.7226,765.5637 C 508.6532,762.62249 504.48106,757.5359 502.4511,754.26017 C 500.42115,750.98443 497.12545,747.13689 495.12735,745.7101 C 493.12927,744.28329 491.49442,741.92206 491.49442,740.46293 C 491.49442,739.0038 490.15434,737.29575 488.51648,736.66723 C 486.87861,736.03872 485.53854,734.37127 485.53854,732.96179 C 485.53854,731.5523 483.75177,729.28324 481.56795,727.91943 C 479.38412,726.55563 477.59736,724.18298 477.59736,722.64692 C 477.59736,721.11086 474.91721,717.32447 471.64148,714.23269 C 468.36574,711.14093 465.68559,707.98809 465.68559,707.22637 C 465.68559,706.46465 462.61458,702.48924 458.86113,698.39211 C 455.10765,694.29502 452.39661,690.36034 452.83659,689.64847 C 453.27659,688.93657 451.84585,686.43208 449.65724,684.08288 C 444.83286,678.9045 431.09986,678.23472 424.502,682.85605 C 420.49033,685.66591 419.54168,685.51297 412.18793,680.87075 C 407.80575,678.10441 402.3967,675.84105 400.16777,675.84105 C 397.82604,675.84105 395.20628,673.84627 393.96222,671.11583 C 392.05874,666.93816 390.05065,666.23763 376.63346,665.07055 C 358.24628,663.47118 341.48063,666.53798 338.53636,672.03937 C 337.41733,674.1303 335.19314,675.84105 333.59369,675.84105 C 331.9942,675.84105 330.68559,676.73443 330.68559,677.82635 C 330.68559,680.88936 323.53125,680.17392 320.75912,676.8337 C 318.9479,674.6513 314.14101,673.85576 302.76555,673.85576 C 294.22839,673.85576 286.81365,673.16033 286.28836,672.31036 C 285.76303,671.4604 279.54456,670.98784 272.4695,671.26022 C 263.09661,671.62105 258.948,670.96293 257.18199,668.83501 C 254.34039,665.41107 247.95454,664.95332 246.90618,668.0984 C 246.50583,669.29949 242.85535,670.28223 238.79403,670.28223 C 234.73274,670.28221 230.91289,671.08627 230.30555,672.06899 C 229.69825,673.05169 223.22365,673.83668 215.91769,673.81337 L 202.63412,673.77101 L 196.67824,665.4311 C 188.37491,653.80413 185.42009,646.16887 186.79727,639.89861 C 187.44599,636.94471 187.03601,633.94638 185.88602,633.23567 C 182.87401,631.3741 179.33741,624.2234 181.42878,624.2234 C 182.39967,624.2234 185.78128,626.63051 188.9435,629.57254 C 192.64657,633.01784 196.91399,634.92567 200.93328,634.93284 C 209.29471,634.94778 223.10789,628.52246 224.5617,623.94193 C 226.04165,619.27913 232.58993,619.14629 235.15225,623.72708 C 236.79798,626.66935 239.62514,627.12608 253.61487,626.70989 C 289.66511,625.63735 295.1904,626.03326 301.88116,630.16837 C 305.42439,632.35817 310.11447,634.14987 312.3036,634.14987 C 314.49272,634.14987 320.40578,635.97323 325.44374,638.20176 C 330.48166,640.43029 338.41236,642.18329 343.06744,642.09732 C 347.72253,642.01134 354.98266,642.53105 359.20113,643.25217 C 365.67958,644.35961 374.77584,642.83877 385.28118,638.89165 C 388.50784,637.67931 394.96056,633.33056 397.14721,630.89467 C 398.26421,629.65025 402.48574,627.58496 406.52824,626.3051 C 411.23122,624.81615 414.31784,622.41355 415.09885,619.63384 C 418.97528,605.83716 420.22818,604.37046 428.13677,604.37046 C 433.68154,604.37046 437.55098,602.8217 442.2893,598.70572 C 451.16438,590.99635 456.38423,588.48811 463.55295,588.48811 C 467.47246,588.48811 470.50095,587.08157 472.1022,584.51752 C 473.56364,582.17744 476.73197,580.54693 479.81775,580.54693 C 485.99261,580.54693 498.82363,575.48664 502.84468,571.46556 C 504.40143,569.90887 506.90695,568.63517 508.41258,568.63517 C 509.91821,568.63517 511.86449,567.4868 512.73768,566.08323 C 513.61085,564.67967 518.34552,560.29805 523.25912,556.34626 C 531.37562,549.81855 533.61722,549.06148 547.76113,548.07098 C 562.6899,547.02552 563.54606,547.19947 568.60672,552.30618 C 572.8502,556.58827 575.55781,557.57154 582.42684,557.32503 C 589.73128,557.06291 591.2291,557.70106 592.7599,561.72738 C 595.20767,568.16553 605.04864,569.71926 625.20695,566.85027 C 644.112,564.15964 660.4489,564.125 663.12309,566.76983 C 665.75077,569.3687 671.7819,569.05111 681.04957,565.82582 C 687.85633,563.45699 689.95929,563.47998 696.23705,565.99183 C 708.70606,570.98097 754.38806,567.41558 762.31794,560.83435 C 764.63539,558.9111 766.08992,559.33361 769.74947,562.99316 C 772.25207,565.49572 777.00209,567.69263 780.3051,567.87516 C 783.60805,568.05767 788.26051,568.30337 790.64372,568.42109 C 793.02692,568.53884 795.48206,570.22694 796.09954,572.17245 C 796.73811,574.18444 799.43797,575.89309 802.36078,576.13499 C 805.18703,576.3689 809.05535,578.48185 810.95713,580.83043 C 813.73475,584.26064 816.92266,585.20987 827.16422,585.65617 C 834.17631,585.96172 843.4871,587.11659 847.8547,588.22252 C 867.257,593.13529 873.7429,595.2173 874.8559,596.88993 C 875.5553,597.94109 878.838,597.96257 882.7971,596.94189 C 887.5221,595.72375 889.7353,593.90411 890.1774,590.8741 C 891.1184,584.42596 902.3427,581.70569 906.5331,586.91022 C 908.3041,589.10996 913.1768,591.22482 917.9485,591.86484 C 927.8327,593.19058 928.3582,594.97353 920.2729,599.74967 C 916.9723,601.69935 911.8443,606.8868 908.8771,611.27734 C 890.9612,637.78828 889.3892,639.1528 872.4855,642.86518 C 869.6538,643.48711 864.8907,646.44214 861.9008,649.43195 C 857.7779,653.55497 854.8739,654.73094 849.8786,654.30057 C 846.2562,653.98846 842.7028,654.68721 841.9821,655.85327 C 841.2614,657.01937 838.9378,657.9734 836.81842,657.9734 C 834.69904,657.9734 832.96501,658.91952 832.96501,660.07587 C 832.96501,661.23222 832.13335,661.66434 831.1169,661.03614 C 828.34451,659.32267 826.30627,663.82154 825.82015,672.72742 C 825.58128,677.10334 824.41103,681.00855 823.21955,681.40571 C 819.99069,682.48198 820.60206,685.76752 824.03118,685.76752 C 825.66905,685.76752 827.00912,684.87414 827.00912,683.78223 C 827.00912,679.79062 832.56177,681.92949 833.45156,686.26385 C 835.38681,695.69066 833.68966,711.13531 830.35184,714.47313 C 828.51666,716.30835 826.48225,720.20422 825.83099,723.13062 C 825.17975,726.05704 823.26266,732.26813 821.57081,736.9331 C 819.87898,741.5981 819.03894,745.9591 819.70412,746.62429 C 822.19072,749.11087 816.87444,755.01361 810.14937,757.23309 C 805.73221,758.69087 803.18559,760.79613 803.18559,762.98994 C 803.18559,766.69079 794.70916,775.10576 790.98128,775.10576 C 789.74501,775.10576 787.71662,776.49657 786.47365,778.19646 C 784.46322,780.94586 783.01395,780.72873 773.35038,776.23057 C 764.51876,772.11966 759.45431,771.17033 746.27077,771.15457 C 728.39782,771.13318 723.77383,772.18521 723.77383,776.27299 C 723.77383,780.18015 714.16068,782.05042 707.33006,779.47213 C 702.60458,777.68845 700.55506,777.90409 696.40842,780.62106 C 692.54984,783.1493 686.1805,784.05564 670.31456,784.33412 C 645.37728,784.77186 638.53153,785.67215 632.71558,789.27881 C 629.13019,791.50228 628.071,791.51886 626.73478,789.3726 C 625.84167,787.93812 618.94526,785.83971 611.40934,784.7095 C 603.87336,783.57931 593.04017,781.3268 587.33546,779.70396 C 573.43622,775.74999 566.32095,777.60359 558.62182,787.18413 C 551.45304,796.10473 550.05371,796.53957 546.98251,790.80102 L 546.98255,790.80102 z"
		id="path2921"
	/>
);

Apure.propTypes = {
	isActive: PropTypes.bool
}

Apure.defaultProps = {
	isActive: false
}

export default Apure