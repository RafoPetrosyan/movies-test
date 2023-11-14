import React from 'react';
import Image from "next/image";
import {Button} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import {convertMsToTime} from "utils/helpers";

const Featured = ({data}) => {
    return (
        <div className="featured-content">
            <div className='info'>
                <p className='category'>{data.Category}</p>
                <Image src={`/images/${data.TitleImage}`} alt={'title'} width={683} height={84}/>
                <div className="other-info">
                    <p className="description">{data.ReleaseYear}</p>
                    <p className="description">{data.MpaRating}</p>
                    <p className="description">{convertMsToTime(data.Duration)}</p>
                </div>
                <p className="description">{data.Description}</p>
                <div className="buttons">
                    <Button className='play'>
                        <CaretRightOutlined/>
                        Play
                    </Button>
                    <Button className='more-info'>
                        More Info
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Featured;