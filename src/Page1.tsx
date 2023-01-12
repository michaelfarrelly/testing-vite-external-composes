import React from "react";
import styles from "./Page1.module.css";

export const Page1: React.FC<{}> = () => {
    return (
        <div className={styles.page1}>
            Page1
            <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tristique, neque a feugiat posuere, diam elit rhoncus
                magna, id porta libero libero id lorem. Morbi et finibus felis.
                Maecenas sed posuere leo, dignissim vulputate turpis. Mauris
                porttitor tempor libero id molestie. Nam venenatis convallis
                neque, non iaculis dui semper quis. Nam et purus at lacus
                dignissim fermentum. Duis dui neque, finibus vel tellus et,
                lobortis maximus eros.
            </div>
            <div className={styles.varText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tristique, neque a feugiat posuere, diam elit rhoncus
                magna, id porta libero libero id lorem. Morbi et finibus felis.
                Maecenas sed posuere leo, dignissim vulputate turpis. Mauris
                porttitor tempor libero id molestie. Nam venenatis convallis
                neque, non iaculis dui semper quis. Nam et purus at lacus
                dignissim fermentum. Duis dui neque, finibus vel tellus et,
                lobortis maximus eros.
            </div>
        </div>
    );
};
