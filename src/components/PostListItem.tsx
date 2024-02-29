import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Post } from '../types/post';
import { Link } from 'expo-router';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Link style={styles.link} href={`/${post.slug}`} style={{ fontSize: 16, fontWeight: '500' }}>
        {post.title}
      </Link>
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
