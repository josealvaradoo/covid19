import React from 'react'
import PropTypes from 'prop-types'

const Portuguesa = ({ isActive }) => (
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
		d="M 606.86081,539.08521 C 606.86081,538.81223 606.50986,538.58889 606.08089,538.58889 C 605.17207,538.58889 603.88287,537.42446 603.88287,536.6036 C 603.88287,535.88749 602.63635,534.6183 601.93301,534.6183 C 601.64053,534.6183 601.40125,534.26733 601.40125,533.83836 C 601.40125,532.83526 600.20635,531.64036 599.20323,531.64036 C 598.77426,531.64036 598.42331,531.41701 598.42331,531.14404 C 598.42331,530.87106 598.07812,530.64771 597.65624,530.64771 C 596.45023,530.64771 594.45272,528.34075 594.45272,526.94784 C 594.45272,526.25298 594.22938,525.68448 593.9564,525.68448 C 593.68342,525.68448 593.46008,525.23779 593.46008,524.69183 C 593.46008,524.14587 593.23673,523.69918 592.96375,523.69918 C 592.69077,523.69918 592.46743,523.34821 592.46743,522.91925 C 592.46743,521.91615 591.27253,520.72124 590.26941,520.72124 C 589.84044,520.72124 589.48949,520.4979 589.48949,520.22492 C 589.48949,519.95194 589.0428,519.7286 588.49684,519.7286 C 587.95088,519.7286 587.50419,519.50525 587.50419,519.23227 C 587.50419,518.95929 587.14709,518.73595 586.71067,518.73595 C 586.27425,518.73595 585.29124,518.06591 584.52625,517.24698 C 583.76127,516.42804 582.82758,515.75801 582.45137,515.75801 C 582.07521,515.75801 581.44547,515.31132 581.05199,514.76536 C 580.63185,514.18244 579.76715,513.77271 578.95711,513.77271 C 578.19847,513.77271 577.57772,513.54937 577.57772,513.27639 C 577.57772,513.00341 577.13103,512.78007 576.58508,512.78007 C 575.92333,512.78007 575.59243,512.44918 575.59243,511.78742 C 575.59243,511.24146 575.36908,510.79477 575.09611,510.79477 C 574.82313,510.79477 574.59978,510.33057 574.59978,509.76321 C 574.59978,509.19587 573.7064,507.87329 572.61449,506.82418 C 570.68031,504.96584 570.12051,503.84624 571.12552,503.84624 C 571.39849,503.84624 571.62184,503.48916 571.62184,503.05273 C 571.62184,502.61631 572.29188,501.6333 573.11081,500.8683 C 574.60072,499.47652 575.03665,498.38668 574.10346,498.38668 C 573.83048,498.38668 573.60713,497.71665 573.60713,496.89771 C 573.60713,495.73963 573.38657,495.40874 572.61449,495.40874 C 572.06853,495.40874 571.62184,495.1854 571.62184,494.91242 C 571.62184,494.63944 570.50511,494.4161 569.14022,494.4161 C 566.71375,494.4161 566.65861,494.38301 566.65861,492.92712 C 566.65861,492.10819 566.43526,491.43815 566.16228,491.43815 C 565.8893,491.43815 565.66596,490.54477 565.66596,489.45286 C 565.66596,488.36095 565.44261,487.46757 565.16963,487.46757 C 564.89666,487.46757 564.67331,487.11504 564.67331,486.68417 C 564.67331,486.25332 563.77993,485.04241 562.68802,483.9933 C 561.59611,482.94419 560.70272,481.82746 560.70272,481.51168 C 560.70272,481.1959 559.80934,480.07917 558.71743,479.03007 C 557.62552,477.98096 556.73213,476.86937 556.73213,476.55987 C 556.73213,476.25038 555.3402,474.6309 553.6389,472.96104 C 551.86886,471.22364 550.80732,469.83772 551.15728,469.72106 C 552.1338,469.39557 551.86409,468.60727 550.77625,468.60727 C 550.2303,468.60727 549.78361,468.38393 549.78361,468.11095 C 549.78361,467.83797 549.11357,467.61462 548.29463,467.61462 C 547.4757,467.61462 546.80566,467.39128 546.80566,467.1183 C 546.80566,466.84532 546.47065,466.62198 546.06118,466.62198 C 545.65171,466.62198 545.31669,466.84532 545.31669,467.1183 C 545.31669,467.39128 544.44192,467.61462 543.37274,467.61462 C 542.28202,467.61462 541.31896,467.88692 541.1785,468.23503 C 540.97823,468.73135 540.92031,468.73135 540.88894,468.23503 C 540.82288,467.18883 539.36081,467.54498 539.36081,468.60727 C 539.36081,469.33521 539.02991,469.59992 538.12,469.59992 C 537.43756,469.59992 536.87919,469.37657 536.87919,469.1036 C 536.87919,468.83062 537.10254,468.60727 537.37552,468.60727 C 537.64849,468.60727 537.87184,468.38393 537.87184,468.11095 C 537.87184,467.83797 537.42515,467.61462 536.87919,467.61462 C 536.33324,467.61462 535.88655,467.39128 535.88655,467.1183 C 535.88655,466.84532 534.65815,466.62198 533.15677,466.62198 C 531.65539,466.62198 530.42699,466.39863 530.42699,466.12565 C 530.42699,465.84204 528.93802,465.62933 526.95272,465.62933 C 524.96743,465.62933 523.47846,465.41662 523.47846,465.13301 C 523.47846,464.86003 523.03177,464.63668 522.48581,464.63668 C 521.91428,464.63668 521.49316,464.3058 521.49316,463.85675 C 521.49316,462.76957 519.90378,461.21549 519.63047,462.03542 C 519.35447,462.86344 518.11168,462.81507 517.23896,461.94236 C 516.36438,461.0678 516.31889,459.83154 517.15033,459.5346 C 517.49156,459.41274 517.59108,459.1214 517.37151,458.88721 C 517.15194,458.653 516.77365,458.78277 516.53089,459.17558 C 516.16531,459.76706 515.92546,459.70064 515.13476,458.78896 C 514.28643,457.81085 513.70251,457.68815 509.89542,457.68815 C 507.3699,457.68815 505.61081,457.89192 505.61081,458.18448 C 505.61081,458.45746 505.16412,458.6808 504.61816,458.6808 C 504.07221,458.6808 503.62552,458.90415 503.62552,459.17712 C 503.62552,459.4501 502.73213,459.67345 501.64022,459.67345 C 500.54831,459.67345 499.65493,459.4501 499.65493,459.17712 C 499.65493,458.90415 498.98489,458.6808 498.16596,458.6808 C 497.34702,458.6808 496.67699,458.45746 496.67699,458.18448 C 496.67699,457.9115 496.2303,457.68815 495.68434,457.68815 C 495.13838,457.68815 494.69169,457.46481 494.69169,457.19183 C 494.69169,456.91885 494.29431,456.69551 493.80861,456.69551 C 493.32292,456.69551 492.60358,456.24882 492.21008,455.70286 C 491.46087,454.66339 490.22478,454.35437 490.22478,455.20654 C 490.22478,455.47951 489.44307,455.70286 488.48765,455.70286 C 487.53223,455.70286 486.75052,455.47951 486.75052,455.20654 C 486.75052,454.93356 485.85713,454.71021 484.76522,454.71021 C 483.67331,454.71021 482.77993,454.48687 482.77993,454.21389 C 482.77993,453.94091 482.33324,453.71757 481.78728,453.71757 C 481.24133,453.71757 480.79463,453.49422 480.79463,453.22124 C 480.79463,452.94826 480.1246,452.72492 479.30566,452.72492 C 478.48673,452.72492 477.81669,452.50157 477.81669,452.2286 C 477.81669,451.95562 477.37,451.73227 476.82405,451.73227 C 476.27809,451.73227 475.8314,451.50893 475.8314,451.23595 C 475.8314,450.96297 475.16136,450.73962 474.34243,450.73962 C 473.52349,450.73962 472.85346,450.51628 472.85346,450.2433 C 472.85346,449.97032 472.40677,449.74698 471.86081,449.74698 C 471.29637,449.74698 470.86816,449.41609 470.86816,448.97993 C 470.86816,447.87388 468.6082,445.77639 467.41646,445.77639 C 466.85808,445.77639 466.40125,445.55304 466.40125,445.28007 C 466.40125,445.00709 465.50787,444.78374 464.41596,444.78374 C 463.32405,444.78374 462.43066,444.5604 462.43066,444.28742 C 462.43066,444.01444 462.07969,443.7911 461.65073,443.7911 C 460.81682,443.7911 459.45272,442.649 459.45272,441.95082 C 459.45272,441.71861 459.00603,441.20666 458.46008,440.81315 C 457.91412,440.41965 457.46743,439.70031 457.46743,439.21461 C 457.46743,438.72892 457.24408,438.33154 456.9711,438.33154 C 456.69813,438.33154 456.47478,437.6615 456.47478,436.84257 C 456.47478,435.68448 456.2542,435.3536 455.48213,435.3536 C 454.93618,435.3536 454.48949,435.57694 454.48949,435.84992 C 454.48949,436.95133 452.81425,436.23338 451.01522,434.36095 C 449.96611,433.26904 448.75522,432.37565 448.32435,432.37565 C 447.87183,432.37565 447.54096,431.95639 447.54096,431.38301 C 447.54096,430.83705 447.31761,430.39036 447.04463,430.39036 C 446.77166,430.39036 446.54831,429.94367 446.54831,429.39771 C 446.54831,428.83665 446.21743,428.40507 445.78728,428.40507 C 445.36871,428.40507 444.25199,427.6308 443.30567,426.68448 C 441.5948,424.97361 441.13321,423.93815 442.0814,423.93815 C 443.08368,423.93815 442.5423,422.5114 441.46099,422.30313 C 440.65343,422.14759 440.79083,422.06933 441.95732,422.02045 C 442.8445,421.98328 443.57037,421.72951 443.57037,421.45654 C 443.57037,421.18356 444.24041,420.96021 445.05934,420.96021 C 445.87827,420.96021 446.54831,421.18356 446.54831,421.45654 C 446.54831,421.72951 447.21835,421.95286 448.03728,421.95286 C 449.29463,421.95286 449.52625,421.75984 449.52625,420.71205 C 449.52625,420.02961 449.24707,419.45361 448.90585,419.43206 C 448.40952,419.40071 448.40952,419.34281 448.90585,419.14254 C 449.24707,419.00486 449.52625,418.24077 449.52625,417.44459 C 449.52625,416.64841 449.7496,415.99698 450.02258,415.99698 C 450.29555,415.99698 450.5189,415.55029 450.5189,415.00433 C 450.5189,414.34257 450.84978,414.01168 451.51155,414.01168 C 452.23949,414.01168 452.50419,413.6808 452.50419,412.77087 C 452.50419,412.08843 452.28085,411.53007 452.00787,411.53007 C 451.73489,411.53007 451.51155,410.86003 451.51155,410.04109 C 451.51155,408.88301 451.73213,408.55212 452.50419,408.55212 C 453.05015,408.55212 453.49684,408.32878 453.49684,408.0558 C 453.49684,407.78282 453.27349,407.55948 453.00052,407.55948 C 452.72754,407.55948 452.50419,407.33613 452.50419,407.06315 C 452.50419,406.79018 452.95088,406.56683 453.49684,406.56683 C 454.1586,406.56683 454.48949,406.23595 454.48949,405.57418 C 454.48949,404.91242 454.82037,404.58154 455.48213,404.58154 C 456.02809,404.58154 456.47478,404.35819 456.47478,404.08521 C 456.47478,403.81223 456.25144,403.58889 455.97846,403.58889 C 455.70548,403.58889 455.48213,403.1422 455.48213,402.59624 C 455.48213,402.05029 455.25879,401.60359 454.98581,401.60359 C 454.26939,401.60359 454.37403,399.7549 455.10989,399.4115 C 455.60622,399.17988 455.60622,399.06407 455.10989,398.83246 C 454.07494,398.34948 454.36517,396.64036 455.48213,396.64036 C 456.02809,396.64036 456.47478,396.41701 456.47478,396.14404 C 456.47478,395.87106 456.25144,395.64771 455.97846,395.64771 C 455.70548,395.64771 455.48213,394.75433 455.48213,393.66242 C 455.48213,392.00801 455.31669,391.67712 454.48949,391.67712 C 453.94353,391.67712 453.49684,391.90047 453.49684,392.17345 C 453.49684,392.44643 453.05015,392.66977 452.50419,392.66977 C 451.95824,392.66977 451.51155,392.44643 451.51155,392.17345 C 451.51155,391.90047 451.06485,391.67712 450.5189,391.67712 C 449.85714,391.67712 449.52625,392.00801 449.52625,392.66977 C 449.52625,393.33153 449.19537,393.66242 448.5336,393.66242 C 447.95487,393.66242 447.54096,393.33153 447.54096,392.8689 C 447.54096,392.43247 446.84222,391.42266 445.9882,390.6249 L 444.43545,389.17441 L 445.49187,388.25817 C 446.07292,387.75425 446.54831,386.75394 446.54831,386.03527 C 446.54831,385.11352 446.80845,384.72859 447.43139,384.72859 C 447.91708,384.72859 448.63642,384.2819 449.02993,383.73595 C 449.42343,383.18999 450.14278,382.7433 450.62847,382.7433 C 451.18066,382.7433 451.51155,382.37137 451.51155,381.75065 C 451.51155,381.2047 451.2882,380.75801 451.01522,380.75801 C 450.74224,380.75801 450.5189,380.53466 450.5189,380.26168 C 450.5189,379.98871 451.41228,379.76536 452.50419,379.76536 C 454.37919,379.76536 454.48949,379.68264 454.48949,378.27639 C 454.48949,377.24285 454.7322,376.78742 455.283,376.78742 C 455.71942,376.78742 456.70243,376.11738 457.46743,375.29845 C 458.23243,374.47951 459.21542,373.80948 459.65185,373.80948 C 460.1145,373.80948 460.44537,373.39556 460.44537,372.81683 C 460.44537,372.27087 460.66872,371.82418 460.94169,371.82418 C 461.22531,371.82418 461.43802,370.33521 461.43802,368.34992 C 461.43802,366.36462 461.65073,364.87565 461.93434,364.87565 C 462.20732,364.87565 462.43066,363.85465 462.43066,362.60675 C 462.43066,360.26459 463.23238,358.91977 464.62867,358.91977 C 465.05762,358.91977 465.4086,358.5688 465.4086,358.13983 C 465.4086,357.12256 466.60837,355.94183 467.64206,355.94183 C 468.67575,355.94183 469.87552,354.76111 469.87552,353.74383 C 469.87552,353.15033 470.40944,352.96389 472.10897,352.96389 C 474.01154,352.96389 474.34243,353.11095 474.34243,353.95654 C 474.34243,354.6183 474.67331,354.94918 475.33508,354.94918 C 475.88103,354.94918 476.32772,355.17253 476.32772,355.44551 C 476.32772,355.71848 477.10943,355.94183 478.06485,355.94183 C 480.05032,355.94183 480.5355,354.66318 478.68526,354.30681 C 477.75179,354.12702 477.79834,354.08063 478.96887,354.02413 C 480.5332,353.94862 481.78728,352.94051 481.78728,351.75853 C 481.78728,350.77492 483.5935,350.72862 484.55251,351.68763 C 485.35598,352.49109 485.5232,355.44551 484.76522,355.44551 C 484.49224,355.44551 484.2689,355.84289 484.2689,356.32859 C 484.2689,356.81428 483.82221,357.53362 483.27625,357.92712 C 482.7303,358.32063 482.2836,358.99067 482.2836,359.41609 C 482.2836,359.84152 481.83691,360.51156 481.29096,360.90507 C 480.745,361.29857 480.29831,362.01791 480.29831,362.5036 C 480.29831,362.9893 480.07497,363.38668 479.80199,363.38668 C 479.52901,363.38668 479.30566,363.83337 479.30566,364.37933 C 479.30566,364.92529 479.08232,365.37198 478.80934,365.37198 C 478.53636,365.37198 478.31302,366.04201 478.31302,366.86095 C 478.31302,367.67988 478.08967,368.34992 477.81669,368.34992 C 477.54372,368.34992 477.32037,368.90828 477.32037,369.59073 C 477.32037,370.58337 477.56853,370.83154 478.56118,370.83154 C 479.24362,370.83154 479.80199,370.57402 479.80199,370.25927 C 479.80199,369.94453 480.21904,370.16787 480.72877,370.75559 C 481.2385,371.34333 481.9306,371.82418 482.26677,371.82418 C 482.60296,371.82418 483.5039,372.49422 484.2689,373.31315 C 485.0339,374.13209 486.01689,374.80212 486.45332,374.80212 C 486.88977,374.80212 487.24684,375.02547 487.24684,375.29845 C 487.24684,375.57143 487.48614,375.79477 487.77862,375.79477 C 488.56938,375.79477 489.72846,374.48816 489.72846,373.59677 C 489.72846,373.06105 490.1947,372.81683 491.21743,372.81683 C 492.41905,372.81683 492.71396,372.60132 492.74558,371.7001 C 492.76712,371.0859 492.89742,370.86256 493.0351,371.20378 C 493.17278,371.545 493.61936,371.82418 494.02748,371.82418 C 494.4356,371.82418 495.62788,372.71757 496.67699,373.80948 C 498.09239,375.28263 498.9786,375.79477 500.11234,375.79477 C 500.95269,375.79477 501.64022,376.01812 501.64022,376.29109 C 501.64022,376.56407 502.08691,376.78742 502.63287,376.78742 C 503.17883,376.78742 503.62552,376.56407 503.62552,376.29109 C 503.62552,376.01812 504.0229,375.79477 504.5086,375.79477 C 504.99429,375.79477 505.71363,375.34808 506.10713,374.80212 C 506.84609,373.77688 508.58875,373.42835 508.58875,374.3058 C 508.58875,374.57878 508.8121,374.80212 509.08508,374.80212 C 509.35805,374.80212 509.5814,374.35543 509.5814,373.80948 C 509.5814,373.26352 509.80474,372.81683 510.07772,372.81683 C 510.3507,372.81683 510.57405,371.58843 510.57405,370.08705 C 510.57405,368.58567 510.3507,367.35727 510.07772,367.35727 C 509.80474,367.35727 509.5814,366.79891 509.5814,366.11646 C 509.5814,365.43402 509.80474,364.87565 510.07772,364.87565 C 510.3507,364.87565 510.57405,364.25492 510.57405,363.49625 C 510.57405,362.68622 510.98378,361.82153 511.56669,361.40139 C 512.60616,360.65218 512.91518,359.41609 512.06302,359.41609 C 511.79004,359.41609 511.56669,358.41104 511.56669,357.18264 L 511.56669,354.94918 L 513.55199,354.94918 C 514.98581,354.94918 515.53728,354.74238 515.53728,354.2047 C 515.53728,353.7911 515.0961,353.46021 514.54463,353.46021 C 513.35668,353.46021 513.18357,351.77243 514.26102,350.69498 C 515.37331,349.58269 515.93201,349.81548 518.51522,352.46757 C 520.64678,354.65596 521.17497,354.94918 522.98536,354.94918 C 526.81093,354.94918 527.66548,352.15459 524.73581,349.22492 C 523.78949,348.27859 522.67276,347.50433 522.25419,347.50433 C 521.83563,347.50433 521.49316,347.16931 521.49316,346.75984 C 521.49316,346.35038 521.92124,346.01536 522.44445,346.01536 C 522.96765,346.01536 523.52602,345.73618 523.68526,345.39496 C 523.91687,344.89863 524.03269,344.89863 524.2643,345.39496 C 524.42355,345.73618 524.98191,346.01536 525.50511,346.01536 C 526.12553,346.01536 526.4564,346.36063 526.4564,347.00801 C 526.4564,347.66977 526.78728,348.00065 527.44905,348.00065 C 528.02778,348.00065 528.44169,348.33154 528.44169,348.79417 C 528.44169,349.2306 529.11173,350.2136 529.93066,350.97859 C 530.84628,351.83393 531.41963,352.86616 531.41963,353.65934 C 531.41963,355.20333 531.93571,355.30634 532.90861,353.95654 C 533.30209,353.41058 534.03739,352.96389 534.5426,352.96389 C 535.97464,352.96389 536.87919,351.71498 536.87919,349.73779 C 536.87919,348.1388 536.01261,346.51168 535.16097,346.51168 C 534.99589,346.51168 534.1245,345.77535 533.22451,344.87538 C 531.90732,343.55817 531.71286,343.12262 532.22745,342.64192 C 533.51213,341.44183 534.954,342.05002 537.87184,345.02271 C 540.97044,348.17959 541.84243,348.61558 541.84243,347.00801 C 541.84243,346.46205 542.06577,346.01536 542.33875,346.01536 C 542.61173,346.01536 542.83508,345.56867 542.83508,345.02271 C 542.83508,344.47676 543.05842,344.03007 543.3314,344.03007 C 543.60438,344.03007 543.82772,343.24836 543.82772,342.29293 C 543.82772,341.0446 543.60825,340.5558 543.0478,340.5558 C 542.29562,340.5558 540.84978,339.43645 540.84978,338.85412 C 540.84978,338.69813 541.51982,338.57051 542.33875,338.57051 C 543.85075,338.57051 544.33745,337.89844 543.20732,337.37106 C 542.71099,337.13944 542.71099,337.02363 543.20732,336.79202 C 543.54854,336.63278 543.82772,335.90037 543.82772,335.16445 C 543.82772,334.39578 544.25009,333.52196 544.82037,333.11095 C 545.4033,332.6908 545.81302,331.82612 545.81302,331.01609 C 545.81302,330.25742 546.03636,329.63668 546.30934,329.63668 C 546.58232,329.63668 546.80566,328.96665 546.80566,328.14771 C 546.80566,327.32878 547.02901,326.65874 547.30199,326.65874 C 547.57497,326.65874 547.79831,326.30777 547.79831,325.8788 C 547.79831,324.77644 549.0289,323.6808 550.26702,323.6808 C 551.51548,323.6808 554.28476,321.12788 553.36786,320.82224 C 552.64337,320.58074 552.54599,318.71757 553.25787,318.71757 C 553.53085,318.71757 553.75419,318.04753 553.75419,317.22859 C 553.75419,316.23595 554.00236,315.73962 554.49868,315.73962 C 555.03635,315.73962 555.24316,316.29109 555.24316,317.72492 C 555.24316,318.81683 555.01982,319.71021 554.74684,319.71021 C 554.47386,319.71021 554.25052,320.1569 554.25052,320.70286 C 554.25052,321.24882 554.47386,321.69551 554.74684,321.69551 C 555.01982,321.69551 555.24316,322.1422 555.24316,322.68815 C 555.24316,323.23411 555.46651,323.6808 555.73949,323.6808 C 556.01247,323.6808 556.23581,324.12749 556.23581,324.67345 C 556.23581,325.2194 556.01247,325.66609 555.73949,325.66609 C 555.46651,325.66609 555.24316,326.33613 555.24316,327.15507 C 555.24316,327.974 555.01982,328.64404 554.74684,328.64404 C 553.86939,328.64404 554.21791,330.3867 555.24316,331.12565 C 555.78912,331.51916 556.23581,332.13698 556.23581,332.49859 C 556.23581,333.40451 558.50138,335.59257 559.43933,335.59257 C 559.8755,335.59257 560.2064,336.02077 560.2064,336.58521 C 560.2064,337.47605 560.5373,337.57786 563.4325,337.57786 C 566.43561,337.57786 566.66133,337.50067 566.69777,336.46113 C 566.71936,335.84693 566.84964,335.62359 566.98732,335.96481 C 567.28313,336.69799 570.62919,336.81199 570.62919,336.08889 C 570.62919,335.81315 571.95274,335.59257 573.60713,335.59257 C 575.26153,335.59257 576.58508,335.37198 576.58508,335.09624 C 576.58508,334.82326 577.82941,334.59992 579.35029,334.59992 C 582.44457,334.59992 583.53361,333.8985 583.53361,331.90559 C 583.53361,331.20364 583.75695,330.62933 584.02993,330.62933 C 584.30291,330.62933 584.52625,330.18264 584.52625,329.63668 C 584.52625,328.90139 584.85715,328.64404 585.8025,328.64404 C 587.39391,328.64404 588.49684,329.70213 588.49684,331.22879 C 588.49684,331.87047 588.94353,332.71744 589.48949,333.11095 C 590.07242,333.53109 590.48213,334.39578 590.48213,335.20581 C 590.48213,335.96448 590.70548,336.58521 590.97846,336.58521 C 591.25144,336.58521 591.47478,337.25525 591.47478,338.07418 C 591.47478,338.89312 591.69813,339.56315 591.97111,339.56315 C 592.24408,339.56315 592.46743,340.29556 592.46743,341.19072 C 592.46743,342.24891 592.81471,343.06857 593.46008,343.53374 C 594.00762,343.9284 594.45272,344.81857 594.45272,345.51904 C 594.45272,346.2195 594.89783,347.10967 595.44537,347.50433 C 596.0283,347.92447 596.43802,348.78916 596.43802,349.59919 C 596.43802,350.35786 596.66136,350.97859 596.93434,350.97859 C 597.20732,350.97859 597.43066,351.64863 597.43066,352.46757 C 597.43066,353.2865 597.65401,353.95654 597.92699,353.95654 C 598.19997,353.95654 598.42331,354.84992 598.42331,355.94183 C 598.42331,357.03374 598.64666,357.92712 598.91963,357.92712 C 599.19261,357.92712 599.41596,358.82051 599.41596,359.91242 C 599.41596,361.00433 599.6393,361.89771 599.91228,361.89771 C 600.18526,361.89771 600.40861,362.2548 600.40861,362.69123 C 600.40861,363.12766 601.07864,364.11066 601.89758,364.87565 C 603.36699,366.24829 603.38655,366.33421 603.38655,371.41742 C 603.38655,375.99891 603.49628,376.64737 604.37919,377.28374 C 604.92515,377.67725 605.37184,378.30087 605.37184,378.66957 C 605.37184,379.57849 606.61324,380.75801 607.56986,380.75801 C 607.99883,380.75801 608.34978,380.98135 608.34978,381.25433 C 608.34978,381.52731 608.79647,381.75065 609.34243,381.75065 C 609.88838,381.75065 610.33508,381.974 610.33508,382.24698 C 610.33508,382.51996 610.73248,382.7433 611.21813,382.7433 C 611.70384,382.7433 612.42321,383.18999 612.81669,383.73595 C 613.21018,384.2819 613.92955,384.72859 614.41525,384.72859 C 614.9009,384.72859 615.29831,385.08112 615.29831,385.51199 C 615.29831,385.94286 616.19169,387.15375 617.28361,388.20286 C 618.37552,389.25197 619.2689,390.36714 619.2689,390.68102 C 619.2689,391.50483 620.55641,392.66977 621.46692,392.66977 C 621.89589,392.66977 622.24684,392.89312 622.24684,393.16609 C 622.24684,393.43907 622.64425,393.66242 623.1299,393.66242 C 623.6156,393.66242 624.33497,394.10911 624.72846,394.65507 C 625.12194,395.20102 625.84131,395.64771 626.32702,395.64771 C 627.08947,395.64771 627.21008,396.12228 627.21008,399.12198 C 627.21008,401.10727 627.4228,402.59624 627.7064,402.59624 C 627.97938,402.59624 628.20272,403.26628 628.20272,404.08521 C 628.20272,404.90415 628.42607,405.57418 628.69905,405.57418 C 628.97202,405.57418 629.19537,405.92515 629.19537,406.35412 C 629.19537,407.52572 630.45355,408.55212 631.88971,408.55212 C 632.83506,408.55212 633.16596,408.80948 633.16596,409.54477 C 633.16596,410.1163 632.83506,410.53742 632.38604,410.53742 C 630.84882,410.53742 630.18802,411.86965 630.18802,414.96888 C 630.18802,416.64693 630.40794,417.98227 630.68434,417.98227 C 630.98516,417.98227 631.18066,420.13301 631.18066,423.44183 C 631.18066,426.75066 631.37617,428.90139 631.67699,428.90139 C 631.96431,428.90139 632.17331,430.48943 632.17331,432.67285 C 632.17331,436.22337 632.26052,436.52578 633.66228,437.83521 C 634.48122,438.60021 635.15125,439.56683 635.15125,439.98325 C 635.15125,440.39967 635.54211,440.84251 636.01982,440.96735 C 636.49753,441.09219 635.82749,441.22024 634.53085,441.2519 C 632.79173,441.29439 632.17331,441.50477 632.17331,442.05396 C 632.17331,442.46756 631.73213,442.79845 631.18066,442.79845 C 630.63471,442.79845 630.18802,443.02179 630.18802,443.29477 C 630.18802,443.56775 629.74133,443.7911 629.19537,443.7911 C 628.64941,443.7911 628.20272,444.01444 628.20272,444.28742 C 628.20272,444.5604 627.75603,444.78374 627.21008,444.78374 C 626.66412,444.78374 626.21743,445.00709 626.21743,445.28007 C 626.21743,445.55304 625.32405,445.77639 624.23213,445.77639 C 623.14022,445.77639 622.24684,445.99973 622.24684,446.27271 C 622.24684,446.54569 621.4492,446.76904 620.47427,446.76904 C 617.76345,446.76904 617.28361,447.58815 617.28361,452.21571 C 617.28361,455.8312 617.40853,456.36922 618.50183,457.46255 C 619.54714,458.50783 620.18134,458.6808 622.96874,458.6808 C 625.88653,458.6808 626.21743,458.7819 626.21743,459.67345 C 626.21743,460.2194 626.44077,460.6661 626.71375,460.6661 C 626.98673,460.6661 627.21008,461.02318 627.21008,461.45961 C 627.21008,461.89603 627.88011,462.87904 628.69905,463.64404 C 629.74783,464.62376 630.18802,465.50009 630.18802,466.6084 C 630.18802,468.51348 631.16652,469.59992 632.88236,469.59992 C 633.58431,469.59992 634.15861,469.82326 634.15861,470.09624 C 634.15861,470.36922 634.94031,470.59257 635.89574,470.59257 C 636.85116,470.59257 637.63287,470.81591 637.63287,471.08889 C 637.63287,471.36187 637.97533,471.58521 638.39388,471.58521 C 639.42663,471.58521 642.9819,475.17905 642.20525,475.43792 C 641.82417,475.56495 641.60346,476.71545 641.60346,478.5751 C 641.60346,480.20195 641.3821,481.51168 641.10713,481.51168 C 640.83416,481.51168 640.61081,482.40507 640.61081,483.49698 C 640.61081,484.58889 640.38747,485.48227 640.11449,485.48227 C 639.84151,485.48227 639.61816,486.15231 639.61816,486.97124 C 639.61816,487.79018 639.39482,488.46021 639.12184,488.46021 C 638.84886,488.46021 638.62552,488.8576 638.62552,489.34329 C 638.62552,489.82898 638.17883,490.54833 637.63287,490.94183 C 637.08691,491.33534 636.64022,492.05468 636.64022,492.54037 C 636.64022,493.02606 636.3052,493.42345 635.89574,493.42345 C 635.35807,493.42345 635.15125,493.97492 635.15125,495.40874 C 635.15125,496.50065 634.92791,497.39404 634.65493,497.39404 C 634.38195,497.39404 634.15861,497.74501 634.15861,498.17397 C 634.15861,499.13059 632.97909,500.37198 632.07018,500.37198 C 631.70146,500.37198 631.07783,500.81867 630.68434,501.36462 C 630.29086,501.91058 629.66112,502.35727 629.28496,502.35727 C 628.90874,502.35727 627.97506,503.02731 627.21008,503.84624 C 626.44509,504.66518 625.51141,505.33521 625.1352,505.33521 C 624.75903,505.33521 624.1293,505.7819 623.73581,506.32786 C 623.34233,506.87382 622.7245,507.32051 622.36288,507.32051 C 621.58345,507.32051 619.2689,509.53139 619.2689,510.27589 C 619.2689,510.56129 618.92644,510.79477 618.50789,510.79477 C 617.52,510.79477 614.30566,514.00909 614.30566,514.99698 C 614.30566,515.41554 614.08232,515.75801 613.80934,515.75801 C 613.53636,515.75801 613.31302,516.2047 613.31302,516.75065 C 613.31302,517.29661 613.08967,517.7433 612.81669,517.7433 C 612.54372,517.7433 612.32037,518.41334 612.32037,519.23227 C 612.32037,520.05121 612.09702,520.72124 611.82405,520.72124 C 611.55107,520.72124 611.32772,521.39128 611.32772,522.21021 C 611.32772,523.02915 611.10438,523.69918 610.8314,523.69918 C 610.55842,523.69918 610.33508,524.36922 610.33508,525.18815 C 610.33508,526.00709 610.11173,526.67712 609.83875,526.67712 C 609.56577,526.67712 609.34243,527.57051 609.34243,528.66242 C 609.34243,529.75433 609.56577,530.64771 609.83875,530.64771 C 610.11173,530.64771 610.33508,531.0944 610.33508,531.64036 C 610.33508,532.18632 610.55842,532.63301 610.8314,532.63301 C 611.10438,532.63301 611.32772,533.52639 611.32772,534.6183 C 611.32772,535.71021 611.10438,536.6036 610.8314,536.6036 C 610.55842,536.6036 610.33508,537.05029 610.33508,537.59624 C 610.33508,538.25801 610.00418,538.58889 609.34243,538.58889 C 608.79647,538.58889 608.34978,538.81223 608.34978,539.08521 C 608.34978,539.35819 608.01476,539.58154 607.6053,539.58154 C 607.19583,539.58154 606.86081,539.35819 606.86081,539.08521 z M 518.51522,354.70102 C 518.51522,354.01858 518.29188,353.46021 518.0189,353.46021 C 517.74592,353.46021 517.52258,354.01858 517.52258,354.70102 C 517.52258,355.38347 517.74592,355.94183 518.0189,355.94183 C 518.29188,355.94183 518.51522,355.38347 518.51522,354.70102 z M 528.7253,354.24016 C 529.72782,353.23766 529.60458,352.46757 528.44169,352.46757 C 527.71375,352.46757 527.44905,352.79845 527.44905,353.70837 C 527.44905,355.12819 527.72309,355.24237 528.72531,354.24015 L 528.7253,354.24016 z M 538.86449,349.24146 C 538.86449,348.832 538.52947,348.49698 538.12,348.49698 C 537.71054,348.49698 537.37552,348.832 537.37552,349.24146 C 537.37552,349.65093 537.71054,349.98595 538.12,349.98595 C 538.52947,349.98595 538.86449,349.65093 538.86449,349.24146 z"
		id="path2998"
	/>
);

Portuguesa.propTypes = {
	isActive: PropTypes.bool
}

Portuguesa.defaultProps = {
	isActive: false
}

export default Portuguesa