import React from 'react';
import Layout from "components/common/layouts";
import {Animation} from "components/pages/bug/lottie-control";


/**
 * Временная страница для корзины, Добавлена анимация, для работы приложение нужно обновить зависимости
 * @returns {JSX.Element}
 * @constructor
 */
const TestMyBug = () => {
    return (
        <Layout>
            <Animation/>
        </Layout>
    );
};

export default TestMyBug;