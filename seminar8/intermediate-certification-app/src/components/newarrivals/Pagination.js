import React from 'react';
import '../../styles/pagination.sass'

const Pagination = () => {
    return (
        <nav className="pagination" aria-label="pagination">
            <ul className="pagination__ul">
                <li className="pagination__li">
                    <a href="">
								<span aria-hidden="true">
									<svg
                                        className="pagination__svg_left"
                                        width="8"
                                        height="14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
										<path d="m7.995 2-5 5 5 5-1 2-7-7 7-7 1 2Z" fill="#000"/>
									</svg>
								</span>
                    </a>
                </li>
                <li className="pagination__li">
                    <a className="pagination__numbers" href="">1</a>
                </li>
                <li className="pagination__li">
                    <a className="pagination__numbers" href="" aria-current="page">2</a>
                </li>
                <li className="pagination__li">
                    <a className="pagination__numbers" href="">3</a>
                </li>
                <li className="pagination__li">
                    <a className="pagination__numbers" href="">4</a>
                </li>
                <li className="pagination__li">
                    <a className="pagination__numbers" href="">5</a>
                </li>
                <li className="pagination__li">
                    <a className="pagination__numbers" href="">6.....20</a>
                </li>
                <li className="pagination__li">
                    <a className="pagination__numbers" href="">
								<span aria-hidden="true">
									<svg
                                        className="pagination__svg_right"
                                        width="8"
                                        height="14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
										<path d="m-.005 12 5-5-5-5 1-2 7 7-7 7-1-2Z" fill="#000"/>
									</svg>
								</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
