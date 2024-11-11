import React from 'react'

interface CloudPanoLogoProps {
    className?: string;
    color?: string;
    width?: number | string;
    height?: number | string;
    title?: string;
}

export default function CloudPanoLogo({
                                          className = '',
                                          color = 'currentColor',
                                          width = '100%',
                                          height = 'auto',
                                          title = 'CloudPano Logo',
                                      }: CloudPanoLogoProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 140 25"
            preserveAspectRatio="xMidYMid meet"
            className={`logo ${className} max-w-[140px] md:max-w-[280px]`}
            role="img"
            aria-label={title}
        > {title && <title>{title}</title>}
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5861 0.363593C17.5861 0.388037 17.5885 0.411917 17.5931 0.435009L11.6585 2.99193C11.6069 2.93192 11.5303 2.89392 11.4448 2.89392C11.2893 2.89392 11.1633 3.01966 11.1633 3.17478C11.1633 3.18382 11.1637 3.19276 11.1646 3.20159L6.81351 5.02211L4.47633 10.1099C4.44811 10.1029 4.41858 10.0992 4.38819 10.0992C4.18693 10.0992 4.02377 10.262 4.02377 10.4628C4.02377 10.52 4.03701 10.5741 4.06059 10.6222L0 14.3303L0.338265 18.7853C0.186396 18.8292 0.0753562 18.969 0.0753562 19.1346C0.0753562 19.3354 0.23851 19.4982 0.439771 19.4982C0.492954 19.4982 0.543477 19.4869 0.589031 19.4664L5.59507 24.3946C5.53767 24.4588 5.50278 24.5436 5.50278 24.6364C5.50278 24.8372 5.66594 25 5.8672 25C6.03019 25 6.16819 24.8932 6.21478 24.746H31.3278L31.3344 24.7384L31.3351 24.7401C32.0901 24.4172 32.771 24.1421 33.385 23.8941C34.0261 23.635 34.5946 23.4054 35.0992 23.1812C36.0916 22.7403 36.8577 22.3126 37.4852 21.7052C38.7042 20.5252 39.3863 18.6803 40.2359 14.7973L40.2401 14.7973C40.4413 14.7973 40.6045 14.6345 40.6045 14.4337C40.6045 14.2534 40.4729 14.1038 40.3004 14.0751L35.9193 6.83528C35.9713 6.77243 36.0026 6.69183 36.0026 6.60396C36.0026 6.40316 35.8394 6.24037 35.6382 6.24037C35.5144 6.24037 35.4051 6.30188 35.3392 6.39593L30.0645 5.08022L30.0646 5.07423C30.0646 4.87342 29.9014 4.71064 29.7001 4.71064C29.6084 4.71064 29.5245 4.74448 29.4605 4.80033L24.6894 1.71259C24.6953 1.68677 24.6983 1.65992 24.6983 1.63235C24.6983 1.43154 24.5352 1.26876 24.3339 1.26876C24.2117 1.26876 24.1035 1.32881 24.0374 1.42096L18.3149 0.358715C18.3123 0.160156 18.1502 0 17.9505 0C17.7493 0 17.5861 0.162786 17.5861 0.363593ZM14.7024 1.83888L17.6498 0.569013C17.7155 0.66453 17.8257 0.727185 17.9505 0.727185C18.1028 0.727185 18.2333 0.633973 18.2878 0.50161L23.9772 1.55772C23.9722 1.58154 23.9696 1.60622 23.9695 1.6315L16.8876 3.02811L14.7024 1.83888ZM14.5325 1.91209L11.7216 3.12316C11.7247 3.13989 11.7263 3.15715 11.7263 3.17478C11.7263 3.25418 11.6933 3.32589 11.6402 3.37698L11.9665 3.99858L16.6641 3.07217L14.5325 1.91209ZM11.8174 4.02798L11.5126 3.44743C11.4909 3.45279 11.4682 3.45564 11.4448 3.45564C11.3503 3.45564 11.2667 3.40919 11.2156 3.33792L7.55955 4.86766L11.8174 4.02798ZM7.02053 5.12221L11.8879 4.16233L12.4832 5.29627C11.0739 5.484 9.82223 5.99969 8.84965 6.84987L7.02053 5.12221ZM12.037 4.13292L16.8641 3.18099L17.7578 3.66734C16.9658 4.08481 16.2282 4.65034 15.5802 5.37295C14.5566 5.20272 13.5645 5.17016 12.6377 5.27707L12.037 4.13292ZM17.9145 3.58699C19.6675 2.71357 21.6706 2.5502 23.5502 3.0017L24.0617 1.87412C24.0355 1.84468 24.0139 1.81094 23.9982 1.77409L17.0875 3.13693L17.9145 3.58699ZM23.694 3.03749L24.1816 1.96273C24.2279 1.98405 24.2795 1.99594 24.3339 1.99594C24.455 1.99594 24.5622 1.93708 24.6285 1.84648L29.3718 4.9163C29.3487 4.96406 29.3357 5.01763 29.3357 5.07423C29.3357 5.15504 29.3621 5.22969 29.4068 5.29005L28.4617 6.12698C27.2337 4.56977 25.5276 3.51017 23.694 3.03749ZM28.5511 6.2423L29.5159 5.38797C29.5376 5.40074 29.5609 5.41131 29.5853 5.41938L29.1704 6.90949C29.1196 6.9125 29.0687 6.91595 29.0176 6.91985C28.8718 6.68486 28.716 6.45893 28.5511 6.2423ZM29.3238 6.90174L29.7318 5.43647C29.8665 5.42491 29.9803 5.34018 30.0331 5.22229L35.281 6.53132C35.2762 6.55479 35.2737 6.57909 35.2737 6.60396C35.2737 6.68627 35.3012 6.76219 35.3474 6.82313L34.1781 8.25899C32.8337 7.34686 31.1845 6.82393 29.3238 6.90174ZM34.2982 8.3421L35.4568 6.91939C35.4689 6.92633 35.4814 6.93259 35.4943 6.93813L35.0182 8.9135C34.7897 8.71025 34.5495 8.5193 34.2982 8.3421ZM35.1412 9.02513L35.6371 6.96755L35.6382 6.96755C35.6982 6.96755 35.7549 6.95307 35.8048 6.9274L38.26 10.9846L37.1056 11.7321C36.631 10.7147 35.9658 9.78853 35.1412 9.02513ZM37.1667 11.866C37.9097 13.5299 38.1468 15.4261 37.7435 17.249L39.9914 14.6995C39.9202 14.6331 39.8756 14.5386 39.8756 14.4337C39.8756 14.2689 39.9855 14.1297 40.1362 14.0851L38.3354 11.1092L37.1667 11.866ZM37.6703 17.5522L40.0825 14.8164C39.2371 18.6687 38.5623 20.4599 37.3837 21.6008C36.7746 22.1904 36.0271 22.6098 35.0399 23.0483C34.5341 23.273 33.9706 23.5006 33.3333 23.758C32.7961 23.975 32.2065 24.2132 31.5546 24.4887L32.5599 23.3485C35.4596 21.9605 37.0747 19.8274 37.6703 17.5522ZM31.5884 23.7663C31.8094 23.6812 32.0241 23.5922 32.2326 23.4995L31.4345 24.4047L31.5884 23.7663ZM13.6239 23.7894H31.4329L31.2374 24.6005H13.1912L13.6239 23.7894ZM6.46643 22.9673C4.66893 21.8688 3.43041 20.0227 3.08709 18.0371L0.804161 19.1304L0.804185 19.1346C0.804185 19.2292 0.768019 19.3153 0.708738 19.38L5.71336 24.3067C5.7601 24.285 5.81223 24.2728 5.8672 24.2728C5.89419 24.2728 5.92049 24.2757 5.9458 24.2813L6.46643 22.9673ZM6.59319 23.043L6.07907 24.3405C6.16226 24.4 6.21935 24.4934 6.22986 24.6005H12.9073L11.8825 23.7894H8.41845C7.76458 23.6241 7.15292 23.3694 6.59319 23.043ZM13.4588 23.7894L13.0604 24.5361L12.117 23.7894H13.4588ZM3.07308 15.9081C3.03667 16.1291 3.01254 16.351 3.00024 16.5731L2.72253 16.3532L3.07308 15.9081ZM2.63247 16.4676L2.99286 16.7529C2.98268 17.1327 3.00679 17.5122 3.06293 17.8873L0.771808 18.9846C0.757711 18.9536 0.73938 18.9249 0.717551 18.8993L2.63247 16.4676ZM0.602929 18.8094L2.51827 16.3772L0.159862 14.5104L0.483561 18.7736C0.526026 18.7787 0.566246 18.7911 0.602929 18.8094ZM0.194064 14.3519L2.60833 16.2629L3.13262 15.5971C3.50189 13.9067 4.60867 12.2927 6.65629 11.1225L6.80798 10.9299C7.0257 9.21158 7.71999 7.88678 8.74089 6.94741L6.89175 5.20084L4.60785 10.1726C4.69579 10.239 4.7526 10.3443 4.7526 10.4628C4.7526 10.6636 4.58945 10.8264 4.38819 10.8264C4.29707 10.8264 4.21376 10.793 4.14986 10.7378L0.150704 14.3898L0.151853 14.405L0.194064 14.3519Z" fill="currentColor" className="logo__icon" /> <path fillRule="evenodd" clipRule="evenodd" d="M66.7872 21.2628C66.3883 20.988 66.055 20.6511 65.7873 20.2519C65.4286 20.5956 65.0525 20.8983 64.6591 21.1599C63.9716 21.6264 63.1878 21.8596 62.3077 21.8596C61.0976 21.8596 60.197 21.3108 59.6057 20.2133L59.5852 20.1741C59.3875 20.3469 59.143 20.4972 58.8518 20.6249C57.8755 21.0502 56.8579 21.3657 55.7991 21.5715C54.7541 21.7636 53.7571 21.8596 52.8083 21.8596C51.1719 21.8596 49.7487 21.5647 48.5386 20.9747C47.3285 20.371 46.4003 19.5204 45.7541 18.4228C45.1078 17.3252 44.7846 16.0493 44.7846 14.5949C44.7846 12.5781 45.1628 10.7877 45.9191 9.22359C46.6891 7.65951 47.7273 6.45216 49.0337 5.60153C50.34 4.73717 51.7907 4.30499 53.3858 4.30499C54.8709 4.30499 55.9985 4.68915 56.7686 5.45747C57.5386 6.21206 57.9236 7.21362 57.9236 8.46213C57.9236 9.29905 57.7724 9.97132 57.4699 10.479C57.1811 10.9866 56.7617 11.2404 56.2116 11.2404C55.8266 11.2404 55.5241 11.1512 55.3041 10.9729C55.0841 10.7945 54.9741 10.5338 54.9741 10.1908C54.9741 10.0674 55.0016 9.84098 55.0566 9.51171C55.1391 9.10011 55.1803 8.77083 55.1803 8.52387C55.1803 7.27536 54.5134 6.6511 53.1796 6.6511C52.272 6.6511 51.4057 6.94608 50.5806 7.53604C49.7556 8.12599 49.0887 8.99721 48.5799 10.1497C48.0711 11.2884 47.8167 12.6467 47.8167 14.2245C47.8167 15.8709 48.2774 17.1468 49.1987 18.0524C50.12 18.9442 51.4813 19.3901 53.2827 19.3901C54.1765 19.3901 55.0772 19.2803 55.9848 19.0608C56.87 18.8367 57.844 18.5049 58.907 18.0655C58.7952 17.4238 58.7393 16.7197 58.7393 15.9532C58.7393 14.2794 58.9525 12.3723 59.3788 10.232C59.8188 8.09169 60.4582 6.25322 61.297 4.71659C62.1496 3.17996 63.1603 2.41164 64.3291 2.41164C64.9892 2.41164 65.5048 2.72034 65.8761 3.33774C66.2611 3.94142 66.4536 4.81263 66.4536 5.95139C66.4536 7.58406 65.9999 9.47741 65.0923 11.6314C64.1847 13.7855 62.954 15.9189 61.4002 18.0318C61.4964 18.5943 61.6546 18.999 61.8746 19.246C62.0946 19.4792 62.3834 19.5959 62.7409 19.5959C63.3047 19.5959 63.7997 19.4381 64.226 19.1225C64.4694 18.9345 64.751 18.6726 65.0707 18.3368C65.0325 18.0774 65.0133 17.8111 65.0133 17.5379C65.0133 16.4952 65.2127 15.5691 65.6115 14.7596C66.0103 13.9364 66.5603 13.2984 67.2616 12.8456C67.9629 12.3792 68.7398 12.1459 69.5924 12.1459C70.6375 12.1459 71.4763 12.5095 72.1088 13.2367C72.7551 13.9501 73.1333 14.835 73.2433 15.8915C73.7285 15.8606 74.2834 15.7755 74.9081 15.6364C75.0477 14.8978 75.2502 14.1253 75.5157 13.319C75.6532 12.9074 75.8457 12.6124 76.0933 12.4341C76.3408 12.2557 76.7327 12.1665 77.269 12.1665C77.5715 12.1665 77.7778 12.2145 77.8878 12.3106C78.0115 12.4066 78.0734 12.5507 78.0734 12.7428C78.0734 12.8525 77.9978 13.2229 77.8465 13.8541C77.709 14.3617 77.599 14.8213 77.5165 15.2329C77.2415 16.6735 77.104 17.6339 77.104 18.1141C77.104 18.4022 77.1383 18.608 77.2071 18.7315C77.2758 18.8413 77.3858 18.8961 77.5371 18.8961C77.7434 18.8961 77.9978 18.6903 78.3003 18.2787C78.6166 17.8671 78.9466 17.2429 79.2904 16.406C79.6479 15.5691 79.9917 14.5401 80.3217 13.319C80.4317 12.9074 80.5967 12.6124 80.8167 12.4341C81.0505 12.2557 81.3943 12.1665 81.848 12.1665C82.1643 12.1665 82.3843 12.2077 82.5081 12.29C82.6318 12.3586 82.6937 12.4958 82.6937 12.7016C82.6937 13.0446 82.5218 13.9844 82.1781 15.521C81.793 17.2772 81.6005 18.3611 81.6005 18.7727C81.6005 19.0333 81.6555 19.2391 81.7655 19.3901C81.8755 19.5273 82.0199 19.5959 82.1987 19.5959C82.4737 19.5959 82.7969 19.4312 83.1681 19.1019C83.3733 18.9192 83.6136 18.678 83.889 18.3784C83.9036 17.3214 84.1372 16.3415 84.5896 15.4387C85.0571 14.492 85.6965 13.7237 86.5078 13.1338C87.3329 12.5301 88.2542 12.1734 89.2718 12.0636C89.533 9.40195 90.0281 7.1313 90.7569 5.25167C91.4994 3.35832 92.4689 2.41164 93.6652 2.41164C94.2565 2.41164 94.7447 2.67918 95.1297 3.21426C95.5285 3.74934 95.7278 4.55881 95.7278 5.64269C95.7278 7.17932 95.3497 8.97663 94.5934 11.0346C93.8371 13.0926 92.8264 15.2055 91.5613 17.3732C91.6163 18.169 91.7332 18.7384 91.912 19.0814C92.1045 19.4244 92.3451 19.5959 92.6339 19.5959C93.0052 19.5959 93.3833 19.4312 93.7683 19.1019C94.0348 18.874 94.3639 18.5409 94.7556 18.1027C94.7389 17.8275 94.7305 17.5432 94.7305 17.2497C94.7305 14.4646 95.1774 12.1048 96.0713 10.1703C96.9788 8.22203 98.1889 6.76772 99.7015 5.80733C101.228 4.83321 102.905 4.34615 104.734 4.34615C106.027 4.34615 107.12 4.57253 108.014 5.02529C108.922 5.47805 109.602 6.09544 110.056 6.87748C110.523 7.6458 110.757 8.51701 110.757 9.49113C110.757 10.6573 110.455 11.7275 109.85 12.7016C109.245 13.6757 108.365 14.4715 107.21 15.0889C106.054 15.7063 104.679 16.0698 103.084 16.1796L102.197 21.1393C101.854 23.0464 100.918 24 99.3921 24C98.5533 24 97.7764 23.753 97.0613 23.2591C96.36 22.7652 95.7962 22.0106 95.3699 20.9953C95.2845 20.7917 95.2076 20.5788 95.1393 20.3565C94.8395 20.6399 94.5269 20.9008 94.2015 21.1393C93.5277 21.6195 92.8608 21.8596 92.2007 21.8596C91.1557 21.8596 90.3581 21.2491 89.8081 20.028C89.2305 20.7552 88.7217 21.2422 88.2817 21.4892C87.8554 21.7362 87.3535 21.8596 86.776 21.8596C85.9372 21.8596 85.2428 21.5509 84.6927 20.9335C84.5742 20.7941 84.4688 20.6456 84.3765 20.4881C84.0994 20.736 83.8135 20.9599 83.5188 21.1599C82.845 21.6264 82.0749 21.8596 81.2086 21.8596C80.5486 21.8596 80.0604 21.6058 79.7441 21.0982C79.4416 20.5906 79.2904 19.8771 79.2904 18.9579C79.0566 19.8908 78.7059 20.6111 78.2384 21.1188C77.7709 21.6127 77.269 21.8596 76.7327 21.8596C76.1139 21.8596 75.6051 21.5784 75.2063 21.0159C74.8213 20.4396 74.6288 19.7262 74.6288 18.8756C74.6288 18.5301 74.6365 18.1948 74.652 17.8694C74.1529 17.9685 73.6283 18.0295 73.0783 18.0524C72.817 19.2048 72.3013 20.1309 71.5313 20.8306C70.7612 21.5166 69.888 21.8596 68.9117 21.8596C68.0867 21.8596 67.3785 21.6607 66.7872 21.2628ZM62.8028 6.15718C63.2015 5.01843 63.5591 4.44905 63.8753 4.44905C64.2604 4.44905 64.4529 4.97041 64.4529 6.01312C64.4529 7.34396 64.1641 8.81885 63.5866 10.4378C63.009 12.043 62.2321 13.6483 61.2558 15.2535C61.2833 13.7031 61.4483 12.0842 61.7508 10.3966C62.0533 8.70909 62.404 7.29594 62.8028 6.15718ZM69.0767 19.6782C69.5168 19.6782 69.8949 19.4998 70.2112 19.1431C70.5412 18.7864 70.7612 18.2719 70.8712 17.5996C70.445 17.3115 70.1149 16.9342 69.8812 16.4677C69.6611 16.0012 69.5511 15.5073 69.5511 14.986C69.5511 14.7664 69.5718 14.5469 69.613 14.3274H69.5099C68.9599 14.3274 68.4992 14.5949 68.1279 15.13C67.7704 15.6514 67.5916 16.3923 67.5916 17.3526C67.5916 18.1072 67.736 18.6835 68.0248 19.0814C68.3273 19.4792 68.678 19.6782 69.0767 19.6782ZM93.4383 4.42847C93.177 4.42847 92.9158 4.89495 92.6545 5.82791C92.3932 6.74714 92.1664 7.95449 91.9738 9.44997C91.7951 10.9454 91.6644 12.5095 91.5819 14.1422C93.122 10.7945 93.8921 8.10541 93.8921 6.07486C93.8921 5.55351 93.844 5.14877 93.7477 4.86065C93.6652 4.57253 93.5621 4.42847 93.4383 4.42847ZM87.4979 19.7811C87.7592 19.7811 88.0204 19.6782 88.2817 19.4724C88.543 19.2529 88.873 18.855 89.2718 18.2787C89.1343 17.5379 89.0655 16.7078 89.0655 15.7886C89.0655 15.4593 89.0793 14.9242 89.1068 14.1833C88.3505 14.4166 87.7179 14.9242 87.2091 15.7063C86.7141 16.4746 86.4666 17.3321 86.4666 18.2787C86.4666 19.2803 86.8103 19.7811 87.4979 19.7811ZM107.684 9.67635C107.684 12.242 106.274 13.7031 103.456 14.0599L104.136 10.0674C104.164 9.93017 104.177 9.75181 104.177 9.53229C104.177 9.16185 104.074 8.89431 103.868 8.72967C103.676 8.55131 103.352 8.46213 102.899 8.46213C102.5 8.46213 102.149 8.56503 101.847 8.77083C101.558 8.96291 101.372 9.29219 101.29 9.75867C100.96 11.556 100.705 12.9897 100.527 14.0599C100.348 14.0461 100.093 14.0118 99.7634 13.957C99.6946 13.9432 99.5915 13.9364 99.454 13.9364C99.1515 13.9364 98.9108 14.0256 98.732 14.2039C98.567 14.3823 98.4845 14.6224 98.4845 14.9242C98.4845 15.2123 98.5464 15.4524 98.6702 15.6445C98.7939 15.8229 99.0621 15.9464 99.4746 16.015C99.4058 16.0012 99.6396 16.0355 100.176 16.1179L99.4952 20.0075C99.3165 20.9541 99.0552 21.4275 98.7114 21.4275C98.4639 21.4275 98.2026 21.2491 97.9276 20.8924C97.6664 20.522 97.4463 20.0075 97.2676 19.3489C97.1026 18.6903 97.0201 17.9357 97.0201 17.0851C97.0201 15.0546 97.3019 13.2504 97.8657 11.6726C98.4433 10.0811 99.2546 8.83943 100.3 7.94764C101.358 7.05584 102.596 6.60994 104.012 6.60994C105.264 6.60994 106.185 6.89806 106.776 7.4743C107.381 8.03681 107.684 8.77083 107.684 9.67635Z" fill="currentColor" className="logo__text" /> <path fillRule="evenodd" clipRule="evenodd" d="M112.154 21.8596C111.302 21.8596 110.621 21.5509 110.112 20.9335C109.603 20.3162 109.349 19.5067 109.349 18.5051C109.349 17.4075 109.603 16.3717 110.112 15.3976C110.621 14.4097 111.295 13.6208 112.134 13.0309C112.986 12.4272 113.887 12.1254 114.836 12.1254C115.138 12.1254 115.338 12.1871 115.434 12.3106C115.544 12.4203 115.633 12.6261 115.702 12.928C115.991 12.8731 116.293 12.8456 116.61 12.8456C117.283 12.8456 117.62 13.0857 117.62 13.5659C117.62 13.8541 117.517 14.5401 117.311 15.6239C116.995 17.2017 116.836 18.2993 116.836 18.9167C116.836 19.1225 116.885 19.2872 116.981 19.4106C117.091 19.5341 117.228 19.5959 117.393 19.5959C117.655 19.5959 117.971 19.4312 118.342 19.1019C118.61 18.8543 118.946 18.4993 119.351 18.037C119.383 16.3869 119.636 14.8143 120.11 13.319C120.234 12.9211 120.434 12.633 120.709 12.4546C120.997 12.2626 121.396 12.1665 121.905 12.1665C122.18 12.1665 122.372 12.2008 122.482 12.2694C122.592 12.338 122.647 12.4684 122.647 12.6604C122.647 12.8799 122.544 13.3739 122.338 14.1422C122.201 14.691 122.091 15.1712 122.008 15.5828C121.925 15.9944 121.857 16.502 121.802 17.1057C122.256 15.9258 122.764 14.9654 123.328 14.2245C123.892 13.4836 124.442 12.9554 124.978 12.6399C125.528 12.3243 126.03 12.1665 126.484 12.1665C127.378 12.1665 127.825 12.6124 127.825 13.5042C127.825 14.0393 127.673 15.0065 127.371 16.406C127.11 17.5996 126.979 18.3885 126.979 18.7727C126.979 19.3215 127.178 19.5959 127.577 19.5959C127.852 19.5959 128.175 19.4312 128.547 19.1019C128.757 18.9145 129.004 18.6657 129.288 18.3555C129.249 18.0895 129.229 17.817 129.229 17.5379C129.229 16.4952 129.422 15.5691 129.807 14.7596C130.206 13.9364 130.742 13.2984 131.416 12.8456C132.089 12.3792 132.846 12.1459 133.685 12.1459C134.496 12.1459 135.19 12.3517 135.768 12.7633C136.345 13.1612 136.778 13.6894 137.067 14.348C137.315 14.9121 137.456 15.5114 137.491 16.146C137.75 16.0437 138.021 15.8833 138.295 15.6491C138.728 15.2787 139.38 15.3288 139.751 15.7608C140.123 16.1929 140.072 16.8434 139.639 17.2137C138.906 17.8408 138.077 18.2119 137.259 18.3223C137.167 18.6517 137.048 18.9664 136.902 19.2666C136.503 20.0761 135.96 20.714 135.273 21.1805C134.599 21.6333 133.85 21.8596 133.024 21.8596C132.213 21.8596 131.519 21.6607 130.941 21.2628C130.563 20.9867 130.247 20.6551 129.992 20.2679C129.642 20.605 129.277 20.9023 128.897 21.1599C128.223 21.6264 127.453 21.8596 126.587 21.8596C125.886 21.8596 125.356 21.6607 124.999 21.2628C124.641 20.8512 124.463 20.2613 124.463 19.493C124.463 19.1088 124.559 18.4228 124.751 17.435C124.93 16.5706 125.019 15.9738 125.019 15.6445C125.019 15.425 124.944 15.3152 124.793 15.3152C124.614 15.3152 124.359 15.5485 124.029 16.015C123.713 16.4677 123.383 17.0714 123.039 17.826C122.709 18.5806 122.441 19.3763 122.235 20.2133C122.084 20.8581 121.905 21.2971 121.699 21.5304C121.506 21.7499 121.197 21.8596 120.77 21.8596C120.248 21.8596 119.877 21.5852 119.657 21.0364C119.602 20.8915 119.555 20.7236 119.515 20.5326C119.28 20.7513 119.041 20.9535 118.796 21.1393C118.163 21.6195 117.551 21.8596 116.96 21.8596C116.506 21.8596 116.087 21.7087 115.702 21.4069C115.331 21.0913 115.049 20.666 114.856 20.1309C114.141 21.2834 113.241 21.8596 112.154 21.8596ZM132.282 15.13C132.593 14.6516 132.977 14.3986 133.435 14.3711C133.218 15.8354 133.771 17.0956 134.828 17.7948C134.747 18.2292 134.613 18.5894 134.427 18.8756C134.111 19.3832 133.719 19.637 133.251 19.637C132.839 19.637 132.495 19.4518 132.22 19.0814C131.945 18.7109 131.807 18.1347 131.807 17.3526C131.807 16.3648 131.966 15.6239 132.282 15.13ZM112.897 19.7811C113.199 19.7811 113.488 19.6027 113.763 19.246C114.038 18.8893 114.237 18.4159 114.361 17.826L115.124 14.0393C114.547 14.053 114.011 14.2725 113.516 14.6978C113.034 15.1094 112.649 15.6582 112.36 16.3442C112.072 17.0302 111.927 17.7574 111.927 18.5257C111.927 18.951 112.01 19.2666 112.175 19.4724C112.354 19.6782 112.594 19.7811 112.897 19.7811Z" fill="currentColor" className="logo__text"
        />
        </svg>
    )
}