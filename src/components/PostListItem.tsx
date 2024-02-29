import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Post } from '../types/post';
import {Link, useRouter} from 'expo-router';

const PostListItem = ({ post }: { post: Post }) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/${post.slug}`)} activeOpacity={0.7} style={styles.container}>
      <Text style={styles.link}>
        {post.title}
      </Text>
    </TouchableOpacity>
  );
};

export default PostListItem;

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#f4f4f4',
  },
  link: {
    fontSize: 16,
    fontWeight: '500',
  },
})
