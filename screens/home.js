import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BookItem from '../components/BookItem';
import { globalStyles } from '../styles/global';
export default function Home({ navigation }) {
  const [books, setBooks] = useState([
    {
      title: '红楼梦',
      author: '曹雪芹',
      rating: 9.6,
      introduction:
        '《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线,以四大家族的荣辱兴衰为背景,描绘出18世纪中国封建社会的方方面面,以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致,人物形象栩栩如生,声口毕现,堪称中国古代小说中的经 典。',
      image_url: 1,
    },
    {
      title: '1984',
      author: '乔治·奥威尔',
      rating: 9.4,
      introduction:
        '《1984》是一部杰出的政治寓言小说,也是一部幻想小说。作品刻画了人类在极权主义社会的生存状态,有若一个永不褪色的警示标签,警醒世人提防这种预想中的黑暗成为现实。历经几十年,其生命力益显强大,被誉为20世纪影响最为深远的文学经典之一。',
      image_url: 2,
    },
    {
      title: '百年孤独',
      author: '加西亚·马尔克斯',
      rating: 9.3,
      introduction:
        '《百年孤独》是魔幻现实主义文学的代表作,描写了布恩迪亚家族七代人的传奇故事,以及加勒比海沿岸小镇马孔多的百年兴衰,反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素,巧妙地糅合了现实与虚幻,展现出一个瑰丽的想象世界,成为20世纪最重要的经典文学巨著之一。1982年加西亚•马尔克斯获得诺贝尔文学奖,奠定世界级文学大师的地位,很大程度上乃是凭借《百年孤独》的巨大影响。',
      image_url: 3,
    },
    {
      title: '三体全集',
      author: '刘慈欣',
      rating: 9.5,
      introduction:
        '三体三部曲 (《三体》《三体Ⅱ·黑暗森林》《三体Ⅲ·死神永生》) ,原名“地球往事三部曲”,是中国著名科幻作家刘慈欣的首个长篇系列,由科幻世界杂志社策划制作，重庆出版集团出版。小说讲述了文革期间一次偶然的星际通讯引发的三体世界对地球的入侵以及之后人类文明与三体文明三百多年的恩怨情仇。三体三部曲出版后十分畅销，并深受读者和主流媒体好评，被普遍认为是中国科幻文学的里程碑之作，为中国科幻确立了一个新高度。',
      image_url: 4,
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../assets/imgs/banner.png')}
        style={styles.image}
      />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('好书详情', item)}
          >
            <BookItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
  },
});
