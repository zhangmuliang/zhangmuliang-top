import { Modal } from 'antd';

export  function myBlog(){
    Modal.info({
        title: '学习博客尚未构建',
        content: '很抱歉，学习博客尚未构建。计划在未来的日子里努力尝试，敬请期待。',
        onOk() { },
    });
}