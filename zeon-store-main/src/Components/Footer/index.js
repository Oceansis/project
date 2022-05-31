import React from 'react';
import {Button, Card} from "react-bootstrap";
import footer_logo from "./img/Vector (4).png"
import "./style.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer ">
            <Card className="bg-dark footer__card">
                <Card.Body className="container d-flex">
                    <img src={footer_logo} alt="footer_logo" />
                    <div className="footer__info">
                        <Card.Title className="footer__title">Компания</Card.Title>
                        <Link to="/about">
                            <Card.Text className="footer__text">О нас</Card.Text>
                        </Link>
                        <Link to="/news">
                            <Card.Text className="footer__text">Новости</Card.Text>

                        </Link>
                        <Link to="/help">
                            <Card.Text className="footer__text">Помощь</Card.Text>
                        </Link>
                    </div>

                    <div className="footer__info">
                        <Card.Title className="footer__title">Контакты</Card.Title>
                        <a href="tel://+996 222101333">
                            <Card.Text className="footer__text">
                            <span className="footer__svg">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5802 13.3435L13.3417 11.1836C12.9307 10.9117 12.3798 11.0012 12.076 11.3892L11.1327 12.6022C11.0114 12.762 10.7911 12.8084 10.6157 12.711L10.4362 12.612C9.8414 12.2878 9.10126 11.8841 7.61001 10.3922C6.11876 8.90033 5.71429 8.15957 5.39006 7.56578L5.29167 7.38632C5.1929 7.21096 5.23839 6.98963 5.39831 6.86742L6.61038 5.92431C6.9982 5.62043 7.08778 5.06966 6.81622 4.65853L4.65654 1.41984C4.37824 1.00119 3.81989 0.875511 3.38904 1.13452L2.03484 1.94805C1.60934 2.19822 1.29716 2.60338 1.16378 3.07862C0.676132 4.85555 1.04298 7.92225 5.56019 12.4403C9.15353 16.0336 11.8286 17 13.6673 17C14.0904 17.0018 14.5119 16.9467 14.9204 16.8362C15.3957 16.703 15.8009 16.3908 16.0509 15.9651L16.8652 14.6116C17.1246 14.1807 16.999 13.6219 16.5802 13.3435ZM16.4058 14.338L15.5934 15.6923C15.4139 15.9996 15.1224 16.2255 14.7801 16.3227C13.1398 16.7731 10.2741 16.4 5.93745 12.063C1.60074 7.72601 1.22777 4.86036 1.67811 3.21971C1.77547 2.87698 2.00162 2.58516 2.3092 2.40536L3.66341 1.59289C3.85035 1.4804 4.09269 1.53493 4.21345 1.7166L5.38662 3.47806L6.37129 4.95501C6.48921 5.13334 6.45046 5.37235 6.28224 5.50431L5.06989 6.44743C4.70094 6.72956 4.59558 7.24005 4.82274 7.64521L4.919 7.82013C5.25977 8.44515 5.68342 9.22268 7.23013 10.7692C8.77684 12.3158 9.55407 12.7395 10.1788 13.0803L10.3539 13.1768C10.759 13.4039 11.2695 13.2986 11.5516 12.9296L12.4947 11.7172C12.6266 11.549 12.8655 11.5103 13.0439 11.6281L16.2821 13.788C16.4639 13.9086 16.5184 14.1511 16.4058 14.338Z" fill="#E6E6E6" stroke="#E6E6E6" strokeWidth="0.5"/>
</svg>
                            </span>
                                +996 222101333
                            </Card.Text>
                        </a>
                        <a href="tel://+996 222101333">
                            <Card.Text className="footer__text">
                            <span className="footer__svg">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5802 13.3435L13.3417 11.1836C12.9307 10.9117 12.3798 11.0012 12.076 11.3892L11.1327 12.6022C11.0114 12.762 10.7911 12.8084 10.6157 12.711L10.4362 12.612C9.8414 12.2878 9.10126 11.8841 7.61001 10.3922C6.11876 8.90033 5.71429 8.15957 5.39006 7.56578L5.29167 7.38632C5.1929 7.21096 5.23839 6.98963 5.39831 6.86742L6.61038 5.92431C6.9982 5.62043 7.08778 5.06966 6.81622 4.65853L4.65654 1.41984C4.37824 1.00119 3.81989 0.875511 3.38904 1.13452L2.03484 1.94805C1.60934 2.19822 1.29716 2.60338 1.16378 3.07862C0.676132 4.85555 1.04298 7.92225 5.56019 12.4403C9.15353 16.0336 11.8286 17 13.6673 17C14.0904 17.0018 14.5119 16.9467 14.9204 16.8362C15.3957 16.703 15.8009 16.3908 16.0509 15.9651L16.8652 14.6116C17.1246 14.1807 16.999 13.6219 16.5802 13.3435ZM16.4058 14.338L15.5934 15.6923C15.4139 15.9996 15.1224 16.2255 14.7801 16.3227C13.1398 16.7731 10.2741 16.4 5.93745 12.063C1.60074 7.72601 1.22777 4.86036 1.67811 3.21971C1.77547 2.87698 2.00162 2.58516 2.3092 2.40536L3.66341 1.59289C3.85035 1.4804 4.09269 1.53493 4.21345 1.7166L5.38662 3.47806L6.37129 4.95501C6.48921 5.13334 6.45046 5.37235 6.28224 5.50431L5.06989 6.44743C4.70094 6.72956 4.59558 7.24005 4.82274 7.64521L4.919 7.82013C5.25977 8.44515 5.68342 9.22268 7.23013 10.7692C8.77684 12.3158 9.55407 12.7395 10.1788 13.0803L10.3539 13.1768C10.759 13.4039 11.2695 13.2986 11.5516 12.9296L12.4947 11.7172C12.6266 11.549 12.8655 11.5103 13.0439 11.6281L16.2821 13.788C16.4639 13.9086 16.5184 14.1511 16.4058 14.338Z" fill="#E6E6E6" stroke="#E6E6E6" strokeWidth="0.5"/>
</svg>
                            </span>
                                +996 222101333
                            </Card.Text>
                        </a>
                        <a href="mailto:mail@gmail.com">
                            <Card.Text className="footer__text">
                            <span className="footer__svg mail">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_5400_13403" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.60156 0.9375H14.3984C14.7153 0.937854 15.0192 1.0639 15.2433 1.28799C15.4673 1.51208 15.5934 1.8159 15.5938 2.13281V9.86719C15.5934 10.1841 15.4673 10.4879 15.2433 10.712C15.0192 10.9361 14.7153 11.0621 14.3984 11.0625H1.60156C1.28465 11.0621 0.980827 10.9361 0.756739 10.712C0.532651 10.4879 0.406604 10.1841 0.40625 9.86719V8.8125V8.25V6.5625V6V2.13281C0.406604 1.8159 0.532651 1.51208 0.756739 1.28799C0.980827 1.0639 1.28465 0.937854 1.60156 0.9375ZM14.3984 1.5H1.60156C1.55785 1.50003 1.51426 1.50459 1.47148 1.51361L7.40959 6.53824C7.57438 6.67839 7.78366 6.75535 8 6.75535C8.21634 6.75535 8.42562 6.67839 8.59041 6.53824L14.5285 1.51361C14.4857 1.50459 14.4422 1.50003 14.3984 1.5ZM0.96875 8.8125V9.86719C0.968771 9.95529 0.987325 10.0424 1.02321 10.1229L6.42999 6.44631L1.06831 1.9095C1.05344 1.89687 1.03992 1.88273 1.02795 1.86731C0.989044 1.95042 0.968835 2.04105 0.96875 2.13281V6V6.5625V7.125V7.6875V8.25V8.8125ZM1.48534 10.4888C1.52365 10.4961 1.56256 10.4999 1.60156 10.5H14.3984C14.4374 10.4999 14.4763 10.4961 14.5147 10.4888L9.1243 6.82336L8.95379 6.9675C8.68756 7.1939 8.34948 7.31822 8 7.31822C7.65052 7.31822 7.31244 7.1939 7.04621 6.9675L6.8757 6.82336L1.48534 10.4888ZM14.9768 10.1229C15.0127 10.0424 15.0312 9.95529 15.0312 9.86719V2.13281C15.0312 2.04316 15.0119 1.95456 14.9748 1.87297L9.57001 6.44624L14.9768 10.1229Z"/>
                            </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.60156 0.9375H14.3984C14.7153 0.937854 15.0192 1.0639 15.2433 1.28799C15.4673 1.51208 15.5934 1.8159 15.5938 2.13281V9.86719C15.5934 10.1841 15.4673 10.4879 15.2433 10.712C15.0192 10.9361 14.7153 11.0621 14.3984 11.0625H1.60156C1.28465 11.0621 0.980827 10.9361 0.756739 10.712C0.532651 10.4879 0.406604 10.1841 0.40625 9.86719V8.8125V8.25V6.5625V6V2.13281C0.406604 1.8159 0.532651 1.51208 0.756739 1.28799C0.980827 1.0639 1.28465 0.937854 1.60156 0.9375ZM14.3984 1.5H1.60156C1.55785 1.50003 1.51426 1.50459 1.47148 1.51361L7.40959 6.53824C7.57438 6.67839 7.78366 6.75535 8 6.75535C8.21634 6.75535 8.42562 6.67839 8.59041 6.53824L14.5285 1.51361C14.4857 1.50459 14.4422 1.50003 14.3984 1.5ZM0.96875 8.8125V9.86719C0.968771 9.95529 0.987325 10.0424 1.02321 10.1229L6.42999 6.44631L1.06831 1.9095C1.05344 1.89687 1.03992 1.88273 1.02795 1.86731C0.989044 1.95042 0.968835 2.04105 0.96875 2.13281V6V6.5625V7.125V7.6875V8.25V8.8125ZM1.48534 10.4888C1.52365 10.4961 1.56256 10.4999 1.60156 10.5H14.3984C14.4374 10.4999 14.4763 10.4961 14.5147 10.4888L9.1243 6.82336L8.95379 6.9675C8.68756 7.1939 8.34948 7.31822 8 7.31822C7.65052 7.31822 7.31244 7.1939 7.04621 6.9675L6.8757 6.82336L1.48534 10.4888ZM14.9768 10.1229C15.0127 10.0424 15.0312 9.95529 15.0312 9.86719V2.13281C15.0312 2.04316 15.0119 1.95456 14.9748 1.87297L9.57001 6.44624L14.9768 10.1229Z" fill="#E6E6E6"/>
                            <path d="M-1.28125 6.28125H-2.28125H-1.28125ZM2.09375 6V5V6ZM0.40625 5H-1V7H0.40625V5ZM-1 5C-1.33981 5 -1.6657 5.13499 -1.90598 5.37527L-0.491767 6.78948C-0.62656 6.92428 -0.809378 7 -1 7V5ZM-1.90598 5.37527C-2.14626 5.61555 -2.28125 5.94144 -2.28125 6.28125H-0.28125C-0.28125 6.47187 -0.356975 6.65469 -0.491767 6.78948L-1.90598 5.37527ZM-2.28125 6.28125C-2.28125 6.62106 -2.14626 6.94695 -1.90598 7.18723L-0.491767 5.77302C-0.356975 5.90781 -0.28125 6.09063 -0.28125 6.28125H-2.28125ZM-1.90598 7.18723C-1.6657 7.42751 -1.33981 7.5625 -1 7.5625V5.5625C-0.809378 5.5625 -0.62656 5.63822 -0.491767 5.77302L-1.90598 7.18723ZM-1 7.5625H0.40625V5.5625H-1V7.5625ZM0.40625 7.25H-0.15625V9.25H0.40625V7.25ZM-0.15625 7.25C-0.496057 7.25 -0.821948 7.38499 -1.06223 7.62527L0.351983 9.03948C0.21719 9.17428 0.0343726 9.25 -0.15625 9.25V7.25ZM-1.06223 7.62527C-1.30251 7.86555 -1.4375 8.19144 -1.4375 8.53125H0.5625C0.5625 8.72187 0.486775 8.90469 0.351983 9.03948L-1.06223 7.62527ZM-1.4375 8.53125C-1.4375 8.87106 -1.30251 9.19695 -1.06223 9.43723L0.351983 8.02302C0.486775 8.15781 0.5625 8.34063 0.5625 8.53125H-1.4375ZM-1.06223 9.43723C-0.821948 9.67751 -0.496057 9.8125 -0.15625 9.8125V7.8125C0.0343726 7.8125 0.21719 7.88822 0.351983 8.02302L-1.06223 9.43723ZM-0.15625 9.8125H0.40625V7.8125H-0.15625V9.8125ZM0.96875 9.8125H1.53125V7.8125H0.96875V9.8125ZM1.53125 9.8125C1.87106 9.8125 2.19695 9.67751 2.43723 9.43723L1.02302 8.02302C1.15781 7.88822 1.34063 7.8125 1.53125 7.8125V9.8125ZM2.43723 9.43723C2.67751 9.19695 2.8125 8.87106 2.8125 8.53125H0.8125C0.8125 8.34063 0.888225 8.15781 1.02302 8.02302L2.43723 9.43723ZM2.8125 8.53125C2.8125 8.19144 2.67751 7.86555 2.43723 7.62527L1.02302 9.03948C0.888225 8.90469 0.8125 8.72187 0.8125 8.53125H2.8125ZM2.43723 7.62527C2.19695 7.38499 1.87106 7.25 1.53125 7.25V9.25C1.34063 9.25 1.15781 9.17428 1.02302 9.03948L2.43723 7.62527ZM1.53125 7.25H0.96875V9.25H1.53125V7.25ZM0.96875 8.6875H1.8125V6.6875H0.96875V8.6875ZM1.8125 8.6875C2.15231 8.6875 2.4782 8.55251 2.71848 8.31223L1.30427 6.89802C1.43906 6.76322 1.62188 6.6875 1.8125 6.6875V8.6875ZM2.71848 8.31223C2.95876 8.07195 3.09375 7.74606 3.09375 7.40625H1.09375C1.09375 7.21563 1.16947 7.03281 1.30427 6.89802L2.71848 8.31223ZM3.09375 7.40625C3.09375 7.06644 2.95876 6.74055 2.71848 6.50027L1.30427 7.91448C1.16947 7.77969 1.09375 7.59687 1.09375 7.40625H3.09375ZM2.71848 6.50027C2.4782 6.25999 2.15231 6.125 1.8125 6.125V8.125C1.62188 8.125 1.43906 8.04928 1.30427 7.91448L2.71848 6.50027ZM1.8125 6.125H0.96875V8.125H1.8125V6.125ZM0.96875 7.5625H2.09375V5.5625H0.96875V7.5625ZM2.09375 7.5625C2.43356 7.5625 2.75945 7.42751 2.99973 7.18723L1.58552 5.77302C1.72031 5.63822 1.90313 5.5625 2.09375 5.5625V7.5625ZM2.99973 7.18723C3.24001 6.94695 3.375 6.62106 3.375 6.28125H1.375C1.375 6.09063 1.45072 5.90781 1.58552 5.77302L2.99973 7.18723ZM3.375 6.28125C3.375 5.94144 3.24001 5.61555 2.99973 5.37527L1.58552 6.78948C1.45072 6.65469 1.375 6.47187 1.375 6.28125H3.375ZM2.99973 5.37527C2.75945 5.13499 2.43356 5 2.09375 5V7C1.90313 7 1.72031 6.92428 1.58552 6.78948L2.99973 5.37527ZM2.09375 5H0.96875V7H2.09375V5ZM14.3984 0.9375L14.4007 -1.0625H14.3984V0.9375ZM1.60156 0.9375V-1.0625L1.59933 -1.0625L1.60156 0.9375ZM0.40625 2.13281L-1.59375 2.13058V2.13281H0.40625ZM0.40625 9.86719H-1.59375L-1.59375 9.86942L0.40625 9.86719ZM1.60156 11.0625L1.59933 13.0625H1.60156V11.0625ZM14.3984 11.0625V13.0625L14.4007 13.0625L14.3984 11.0625ZM15.5938 9.86719L17.5938 9.86942V9.86719H15.5938ZM15.5938 2.13281H17.5938L17.5937 2.13058L15.5938 2.13281ZM1.60156 1.5V-0.5L1.60026 -0.5L1.60156 1.5ZM14.3984 1.5L14.3998 -0.5H14.3984V1.5ZM14.5285 1.51361L15.8204 3.04037L18.9411 0.399743L14.941 -0.443394L14.5285 1.51361ZM8.59041 6.53824L7.29851 5.01148L7.29473 5.01469L8.59041 6.53824ZM7.40959 6.53824L8.70527 5.01469L8.70148 5.01148L7.40959 6.53824ZM1.47148 1.51361L1.05891 -0.443378L-2.94094 0.399878L0.179587 3.04037L1.47148 1.51361ZM0.96875 9.86719H-1.03125L-1.03125 9.86767L0.96875 9.86719ZM0.96875 2.13281L-1.03125 2.13096V2.13281H0.96875ZM1.02795 1.86731L2.6081 0.641282L0.603307 -1.94255L-0.783363 1.01929L1.02795 1.86731ZM1.06831 1.9095L-0.226473 3.43382L-0.223572 3.43627L1.06831 1.9095ZM6.42999 6.44631L7.5546 8.10017L9.73144 6.61994L7.72188 4.91954L6.42999 6.44631ZM1.02321 10.1229L-0.80342 10.9374L0.17043 13.1213L2.14782 11.7767L1.02321 10.1229ZM14.3984 10.5V12.5L14.4056 12.5L14.3984 10.5ZM1.60156 10.5L1.5945 12.5H1.60156V10.5ZM1.48534 10.4888L0.360714 8.83497L-3.63183 11.5499L1.11104 12.4535L1.48534 10.4888ZM6.8757 6.82336L8.16688 5.29599L7.007 4.31548L5.75108 5.16951L6.8757 6.82336ZM7.04621 6.9675L8.34188 5.44393L8.33739 5.44013L7.04621 6.9675ZM8 7.31822V5.31822V7.31822ZM8.95379 6.9675L7.66261 5.44012L7.65812 5.44394L8.95379 6.9675ZM9.1243 6.82336L10.2489 5.16951L8.993 4.31548L7.83312 5.29599L9.1243 6.82336ZM14.5147 10.4888L14.8889 12.4535L19.6321 11.5501L15.6393 8.83497L14.5147 10.4888ZM15.0312 9.86719L17.0312 9.86767V9.86719H15.0312ZM14.9768 10.1229L13.8522 11.7767L15.8296 13.1214L16.8034 10.9374L14.9768 10.1229ZM9.57001 6.44624L8.27812 4.91946L6.26858 6.61985L8.44538 8.10009L9.57001 6.44624ZM14.9748 1.87297L16.7949 1.04401L15.6998 -1.36042L13.6829 0.346198L14.9748 1.87297ZM15.0312 2.13281H17.0312V2.1317L15.0312 2.13281ZM14.3984 -1.0625H1.60156V2.9375H14.3984V-1.0625ZM1.59933 -1.0625C0.752764 -1.06155 -0.0588597 -0.724839 -0.657474 -0.126224L2.17095 2.7022C2.02051 2.85264 1.81654 2.93726 1.60379 2.9375L1.59933 -1.0625ZM-0.657474 -0.126224C-1.25609 0.47239 -1.5928 1.28401 -1.59375 2.13058L2.40625 2.13504C2.40601 2.34779 2.32139 2.55176 2.17095 2.7022L-0.657474 -0.126224ZM-1.59375 2.13281V6H2.40625V2.13281H-1.59375ZM-1.59375 6.5625V8.25H2.40625V6.5625H-1.59375ZM-1.59375 8.8125V9.86719H2.40625V8.8125H-1.59375ZM-1.59375 9.86942C-1.5928 10.716 -1.25609 11.5276 -0.657474 12.1262L2.17095 9.2978C2.32139 9.44823 2.40601 9.6522 2.40625 9.86496L-1.59375 9.86942ZM-0.657474 12.1262C-0.0588605 12.7248 0.752763 13.0616 1.59933 13.0625L1.60379 9.0625C1.81655 9.06274 2.02052 9.14736 2.17095 9.2978L-0.657474 12.1262ZM1.60156 13.0625H14.3984V9.0625H1.60156V13.0625ZM14.4007 13.0625C15.2472 13.0616 16.0589 12.7248 16.6575 12.1262L13.829 9.2978C13.9795 9.14736 14.1835 9.06274 14.3962 9.0625L14.4007 13.0625ZM16.6575 12.1262C17.2561 11.5276 17.5928 10.716 17.5937 9.86942L13.5938 9.86496C13.594 9.6522 13.6786 9.44823 13.829 9.2978L16.6575 12.1262ZM17.5938 9.86719V2.13281H13.5938V9.86719H17.5938ZM17.5937 2.13058C17.5928 1.28401 17.2561 0.472389 16.6575 -0.126224L13.829 2.7022C13.6786 2.55177 13.594 2.3478 13.5938 2.13504L17.5937 2.13058ZM16.6575 -0.126224C16.0589 -0.724838 15.2472 -1.06155 14.4007 -1.0625L14.3962 2.9375C14.1835 2.93726 13.9795 2.85264 13.829 2.7022L16.6575 -0.126224ZM1.60156 3.5H14.3984V-0.5H1.60156V3.5ZM14.3971 3.5C14.3026 3.49993 14.2084 3.49008 14.116 3.4706L14.941 -0.443394C14.763 -0.480906 14.5817 -0.499874 14.3998 -0.5L14.3971 3.5ZM13.2366 -0.013156L7.29852 5.01148L9.88231 8.065L15.8204 3.04037L13.2366 -0.013156ZM7.29473 5.01469C7.49159 4.84728 7.74158 4.75535 8 4.75535V8.75535C8.69109 8.75535 9.35964 8.50951 9.8861 8.06179L7.29473 5.01469ZM8 4.75535C8.25842 4.75535 8.50841 4.84728 8.70527 5.01469L6.1139 8.06179C6.64036 8.50951 7.30891 8.75535 8 8.75535V4.75535ZM8.70148 5.01148L2.76338 -0.0131559L0.179587 3.04037L6.11769 8.065L8.70148 5.01148ZM1.88406 3.47059C1.79159 3.49008 1.69736 3.49994 1.60287 3.5L1.60026 -0.5C1.41834 -0.499881 1.23692 -0.480907 1.05891 -0.443378L1.88406 3.47059ZM2.96875 9.86719V8.8125H-1.03125V9.86719H2.96875ZM2.96875 8.25V7.6875H-1.03125V8.25H2.96875ZM2.96875 7.125V6.5625H-1.03125V7.125H2.96875ZM2.96875 6V2.13281H-1.03125V6H2.96875ZM2.96875 2.13467C2.96856 2.33536 2.92437 2.53357 2.83927 2.71533L-0.783363 1.01929C-0.946277 1.36727 -1.03089 1.74674 -1.03125 2.13096L2.96875 2.13467ZM-0.552189 3.09334C-0.455645 3.21777 -0.346489 3.33187 -0.226471 3.43382L2.3631 0.385185C2.45337 0.461865 2.53547 0.547687 2.6081 0.641282L-0.552189 3.09334ZM-0.223572 3.43627L5.13811 7.97308L7.72188 4.91954L2.3602 0.382728L-0.223572 3.43627ZM5.30538 4.79245L-0.101404 8.46902L2.14782 11.7767L7.5546 8.10017L5.30538 4.79245ZM2.84983 9.30836C2.92819 9.48408 2.9687 9.67431 2.96875 9.86671L-1.03125 9.86767C-1.03116 10.2363 -0.953537 10.6007 -0.80342 10.9374L2.84983 9.30836ZM14.3984 8.5H1.60156V12.5H14.3984V8.5ZM1.60862 8.50001C1.69285 8.50031 1.77688 8.50839 1.85963 8.52416L1.11104 12.4535C1.27043 12.4838 1.43227 12.4994 1.5945 12.5L1.60862 8.50001ZM2.60996 12.1427L8.00033 8.47721L5.75108 5.16951L0.360714 8.83497L2.60996 12.1427ZM5.58453 8.35073L5.75504 8.49487L8.33739 5.44013L8.16688 5.29599L5.58453 8.35073ZM5.75054 8.49106C6.37842 9.02502 7.17577 9.31822 8 9.31822V5.31822C8.12527 5.31822 8.24645 5.36278 8.34188 5.44394L5.75054 8.49106ZM8 9.31822C8.82423 9.31822 9.62158 9.02502 10.2495 8.49106L7.65812 5.44394C7.75355 5.36278 7.87473 5.31822 8 5.31822V9.31822ZM10.245 8.49487L10.4155 8.35073L7.83312 5.29599L7.66262 5.44013L10.245 8.49487ZM7.99967 8.47721L13.39 12.1427L15.6393 8.83497L10.2489 5.16951L7.99967 8.47721ZM14.1405 8.52414C14.2232 8.50839 14.3071 8.50031 14.3913 8.50001L14.4056 12.5C14.5678 12.4994 14.7295 12.4838 14.8889 12.4535L14.1405 8.52414ZM13.0312 9.86671C13.0313 9.67431 13.0718 9.48408 13.1502 9.30836L16.8034 10.9374C16.9535 10.6007 17.0312 10.2363 17.0312 9.86767L13.0312 9.86671ZM16.1014 8.46903L10.6946 4.79239L8.44538 8.10009L13.8522 11.7767L16.1014 8.46903ZM10.8619 7.97301L16.2667 3.39975L13.6829 0.346198L8.27812 4.91946L10.8619 7.97301ZM13.1547 2.70193C13.0734 2.52358 13.0314 2.3299 13.0312 2.13393L17.0312 2.1317C17.031 1.75642 16.9505 1.38554 16.7949 1.04401L13.1547 2.70193ZM13.0312 2.13281V9.86719H17.0312V2.13281H13.0312ZM-1.03125 6V6.5625H2.96875V6H-1.03125ZM-1.59375 6V6.5625H2.40625V6H-1.59375ZM-1.03125 7.125V7.6875H2.96875V7.125H-1.03125ZM-1.03125 8.25V8.8125H2.96875V8.25H-1.03125ZM-1.59375 8.25V8.8125H2.40625V8.25H-1.59375Z" fill="#E6E6E6" mask="url(#path-1-inside-1_5400_13403)"/>
                        </svg>
                            </span>
                                mail@gmail.com
                            </Card.Text>
                        </a>




                    </div>

                    <div className="footer__info">

                        <Card.Title className="footer__title">Мы в социальных сетях:</Card.Title>

                        <a href="https://www.instagram.com/zeon.ithub/">
                            <Card.Text className="footer__text">
                            <span className="footer__svg">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7268 0.75H5.27322C2.77911 0.75 0.75 2.77911 0.75 5.27326V12.7268C0.75 15.2209 2.77911 17.25 5.27322 17.25H12.7268C15.2209 17.25 17.25 15.2209 17.25 12.7268V5.27326C17.25 2.77911 15.2209 0.75 12.7268 0.75ZM16.2756 12.7268C16.2756 14.6836 14.6836 16.2756 12.7268 16.2756H5.27322C3.31639 16.2756 1.7244 14.6836 1.7244 12.7268V5.27326C1.7244 3.31639 3.31639 1.7244 5.27322 1.7244H12.7268C14.6836 1.7244 16.2756 3.31639 16.2756 5.27326V12.7268Z" fill="#E5E5E5"/>
<path d="M9.00022 4.47461C6.50479 4.47461 4.47461 6.50479 4.47461 9.00022C4.47461 11.4956 6.50475 13.5258 9.00022 13.5258C11.4956 13.5258 13.5259 11.4956 13.5259 9.00018C13.5259 6.50475 11.4956 4.47461 9.00022 4.47461ZM9.00022 12.5515C7.04207 12.5515 5.44898 10.9583 5.44898 9.00018C5.44898 7.04203 7.04207 5.44895 9.00022 5.44895C10.9584 5.44895 12.5515 7.04207 12.5515 9.00022C12.5515 10.9584 10.9584 12.5515 9.00022 12.5515Z" fill="#E5E5E5"/>
<path d="M13.7969 2.82861C13.0387 2.82861 12.4219 3.44546 12.4219 4.20362C12.4219 4.96178 13.0387 5.5786 13.7969 5.5786C14.555 5.5786 15.1718 4.96175 15.1718 4.20359C15.1718 3.44543 14.555 2.82861 13.7969 2.82861ZM13.7969 4.60416C13.576 4.60416 13.3963 4.42447 13.3963 4.20359C13.3963 3.98271 13.576 3.80301 13.7969 3.80301C14.0177 3.80301 14.1974 3.98274 14.1974 4.20359C14.1974 4.42444 14.0177 4.60416 13.7969 4.60416Z" fill="#E5E5E5"/>
</svg>

                            </span>
                                Instagram
                            </Card.Text>
                        </a>
                        <a href="https://www.telegram.com/">
                            <Card.Text className="footer__text">
                            <span className="footer__svg">
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.293379 7.93065L4.45059 10.0025C4.61138 10.0819 4.80121 10.0762 4.95492 9.98623L8.65525 7.83502L6.4155 9.81977C6.30146 9.92107 6.23629 10.0656 6.23629 10.2179V15.0522C6.23629 15.5622 6.88725 15.7769 7.19254 15.3717L8.98959 12.9825L13.4337 15.5134C13.7453 15.6926 14.1448 15.5127 14.2171 15.1564L16.9888 1.34385C17.0717 0.928768 16.6587 0.590184 16.2748 0.744601L0.337295 6.96023C-0.0905381 7.1274 -0.118163 7.72594 0.293379 7.93065ZM15.7563 2.0876L13.3203 14.2263L9.10929 11.8279C8.87979 11.6969 8.58442 11.7549 8.4215 11.9703L7.29879 13.4627V10.4566L13.3558 5.09023C13.8353 4.66594 13.2842 3.91156 12.7367 4.23314L4.66875 8.92373L1.84109 7.51486L15.7563 2.0876Z" fill="#E5E5E5"/>
</svg>

                            </span>
                                Telegram
                            </Card.Text>
                        </a>
                        <a href="https://www.whatsapp.com/">
                            <Card.Text className="footer__text">
                            <span className="footer__svg">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1294 10.6835L12.2549 9.80902C12.0163 9.57045 11.6866 9.45089 11.3509 9.48108C11.0149 9.51122 10.7119 9.68746 10.5196 9.96458L10.215 10.4035C9.80076 10.3297 8.99939 10.1209 8.43922 9.56068C7.87884 9.00026 7.67001 8.19853 7.59634 7.7849L8.03539 7.48027C8.31254 7.28794 8.48879 6.98491 8.51886 6.64892C8.54899 6.31292 8.42943 5.98344 8.19092 5.74496L7.31648 4.87052C6.96509 4.51916 6.43544 4.4353 5.99845 4.66173C5.23223 5.0587 4.72892 5.80281 4.58106 6.75697C4.34023 8.31155 5.05892 10.1456 6.45661 11.5433C7.67562 12.7623 9.22639 13.4647 10.6343 13.4647C10.8407 13.4647 11.0441 13.4496 11.2429 13.4188C12.1971 13.2711 12.9412 12.7677 13.3381 12.0015C13.3381 12.0015 13.3381 12.0015 13.3382 12.0015C13.5646 11.5644 13.4807 11.0348 13.1294 10.6835ZM12.4484 11.5405C12.133 12.1494 11.5353 12.3595 11.0895 12.4286C9.86377 12.6184 8.32334 11.9929 7.16515 10.8347C6.00702 9.67654 5.38138 8.13617 5.57125 6.91037C5.64028 6.46455 5.85047 5.86694 6.45935 5.55144C6.47585 5.54293 6.49409 5.53877 6.51259 5.53877C6.54662 5.53877 6.58156 5.55279 6.60785 5.57906L7.48232 6.45353C7.51864 6.48991 7.52328 6.53122 7.52074 6.55949C7.51819 6.58778 7.50633 6.62761 7.46405 6.65694L6.77334 7.13621C6.6289 7.23644 6.54753 7.40511 6.55903 7.58055C6.56338 7.64681 6.67733 9.21586 7.73063 10.2692C8.78392 11.3225 10.353 11.4365 10.4192 11.4408C10.5945 11.4521 10.7634 11.3709 10.8636 11.2264L11.3429 10.5357C11.3722 10.4935 11.412 10.4816 11.4403 10.4791C11.4686 10.4765 11.5099 10.4812 11.5463 10.5175L12.4208 11.3919C12.4614 11.4325 12.4727 11.4936 12.4484 11.5405Z" fill="#E5E5E5"/>
<path d="M14.8335 3.16648C13.2752 1.60816 11.2035 0.75 8.99967 0.75C6.79589 0.75 4.72411 1.60816 3.16582 3.16644C1.8414 4.49086 1.00061 6.24369 0.798229 8.10207C0.606899 9.8589 0.98872 11.6471 1.87456 13.163L1.01482 16.3715C0.968482 16.5444 1.01792 16.7289 1.14454 16.8555C1.27109 16.982 1.45565 17.0315 1.62845 16.9852L4.837 16.1255C6.09718 16.8619 7.54574 17.25 9.00789 17.25C9.30447 17.25 9.60163 17.234 9.89789 17.2018C11.7563 16.9994 13.5091 16.1586 14.8335 14.8341C16.3918 13.2759 17.25 11.204 17.25 9.00032C17.25 6.79661 16.3918 4.72476 14.8335 3.16648ZM14.125 14.1256C11.7295 16.521 8.05025 16.9467 5.17766 15.1608C5.09748 15.111 5.00573 15.0853 4.91308 15.0853C4.86971 15.0853 4.82614 15.0909 4.78343 15.1024L2.20734 15.7927L2.89763 13.2166C2.93347 13.0828 2.91229 12.94 2.83917 12.8224C1.05327 9.94968 1.47898 6.27041 3.87435 3.87501C6.7005 1.04893 11.2988 1.04893 14.125 3.87501C16.951 6.70109 16.951 11.2995 14.125 14.1256Z" fill="#E5E5E5"/>
</svg>


                            </span>
                                Whatsapp
                            </Card.Text>

                        </a>
                    </div>
                </Card.Body>
                <Card.Text className=" container footer__rights mt-5">Developed by Zeon 2022</Card.Text>

            </Card>
        </footer>
    );
};

export default Footer;