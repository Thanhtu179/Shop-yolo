import React from 'react'
import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'
import { Link } from 'react-router-dom'


const footerAboutLink = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyễn dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống của hàng",
        path: "/about"
    },

]

const footerCustomerLink = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hổ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng:  <strong>0938915...</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng:  <strong>0938915...</strong>
                            </p>
                            <p>
                                Gợi ý, khiếu nại:  <strong>0938915...</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLink.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLink.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} alt="logo" className="footer__logo" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu
                            người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động,
                            tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
