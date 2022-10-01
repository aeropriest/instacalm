import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

export default function Comment({comment}: ICommentProps) {
  return (
    <View style={styles.comment}>
    <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
    </Text>
    <AntDesign
        name={'hearto'}
        size={14}
        style={styles.icon}
        color={colors.black}
    />
  </View>
  );
}

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      commentText: {
        color: 'black',
        flex: 1,
        lineHeight: 18,
      },
      icon: {
        marginHorizontal: 5,
        color: colors.colors.black,
      },
      text: {
        color: colors.colors.g,
        lineHeight: 18,
      },
      bold: {
        color: colors.colors.black,
        fontWeight: fonts.weight.bold
      },
  })