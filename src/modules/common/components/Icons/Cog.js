import * as React from 'react';

const SvgCog = (props) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.258 20.897a.731.731 0 0 0 .333.09.659.659 0 0 0 .503-.254l.53-.645a1.71 1.71 0 0 1 1.367-.59 1.664 1.664 0 0 1 1.367.59l.521.645a.664.664 0 0 0 .9.154l3.506-2.044a.679.679 0 0 0 .297-.827l-.297-.782a1.837 1.837 0 0 1 .162-1.48 1.732 1.732 0 0 1 1.177-.91l.81-.136a.664.664 0 0 0 .407-.229.677.677 0 0 0 .159-.443v-4.09a.677.677 0 0 0-.159-.443.664.664 0 0 0-.408-.23l-.818-.136a1.69 1.69 0 0 1-1.177-.908 1.712 1.712 0 0 1-.153-1.454l.287-.79a.68.68 0 0 0-.287-.828l-3.489-2.045a.66.66 0 0 0-.899.155l-.521.645a1.736 1.736 0 0 1-1.385.59 1.667 1.667 0 0 1-1.277-.59l-.521-.645a.682.682 0 0 0-.9-.164l-3.55 2.009a.69.69 0 0 0-.288.836l.287.781a1.744 1.744 0 0 1-.18 1.5 1.686 1.686 0 0 1-1.168.908l-.827.137a.673.673 0 0 0-.406.23.686.686 0 0 0-.16.442v4.09a.686.686 0 0 0 .15.45.673.673 0 0 0 .407.24l.827.136a1.682 1.682 0 0 1 1.196.91 1.73 1.73 0 0 1 .161 1.462l-.287.782a.68.68 0 0 0 .287.836l3.516 2.045Zm.162-1.473-2.527-1.463.117-.245a3.185 3.185 0 0 0-.279-2.672 3.052 3.052 0 0 0-.892-1.012 3.013 3.013 0 0 0-1.238-.524l-.252-.045v-2.935l.26-.046a3.03 3.03 0 0 0 1.248-.539c.37-.272.676-.625.892-1.033a3.103 3.103 0 0 0 .261-2.635l-.09-.236 2.5-1.463.153.2c.297.351.669.632 1.087.82.418.19.873.281 1.331.27.457.014.911-.077 1.329-.266.417-.189.787-.47 1.08-.825l.162-.2 2.518 1.49-.09.237a3.113 3.113 0 0 0 .26 2.636c.22.4.526.747.895 1.014.368.267.79.448 1.237.53l.251.046v3.017h-.242a3.22 3.22 0 0 0-1.236.553 3.293 3.293 0 0 0-1.174 3.672l.09.228-2.509 1.472-.161-.2a3.043 3.043 0 0 0-1.076-.848 3.011 3.011 0 0 0-1.334-.288 2.976 2.976 0 0 0-1.326.288 3.008 3.008 0 0 0-1.065.848l-.18.154Zm3.32-8.557a1.338 1.338 0 0 0-1.703.17 1.37 1.37 0 0 0 .438 2.222 1.335 1.335 0 0 0 1.47-.295 1.369 1.369 0 0 0 .292-1.486 1.36 1.36 0 0 0-.497-.611Zm-2.248-1.134a2.677 2.677 0 0 1 3.406.34 2.747 2.747 0 0 1 .335 3.442 2.703 2.703 0 0 1-1.21 1.004 2.67 2.67 0 0 1-2.94-.591 2.753 2.753 0 0 1-.585-2.971 2.72 2.72 0 0 1 .995-1.224Z"
            fill={props.color}
        />
    </svg>
);

export default SvgCog;
