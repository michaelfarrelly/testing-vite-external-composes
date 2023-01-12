import React from "react";
import styles from "./Page2.module.css";

export const Page2: React.FC<{}> = () => {
    return (
        <div className={styles.page2}>
            Page2
            <div className={styles.text}>
                Integer finibus quam quam. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eleifend et erat nec
                fringilla. Cras placerat malesuada felis a viverra. Quisque
                laoreet facilisis gravida. Vivamus pharetra finibus tortor at
                faucibus. Donec convallis nisl nec augue bibendum maximus.
                Praesent hendrerit urna mi, eget bibendum ipsum vestibulum eget.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas gravida aliquam mauris.
            </div>
        </div>
    );
};
