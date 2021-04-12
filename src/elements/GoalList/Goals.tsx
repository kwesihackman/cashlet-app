import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../utils/Styles'
import { GoalsData } from '../../../utils/Constants'
import GoalListItem from './GoalListItem'



const Goals = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Your Goals</Text>
            <View style={{ flex: 1 }}>
                {GoalsData.map((goal, index) => <GoalListItem key={`${index}-${goal.goal}`} funds={goal.funds} tagTitle={goal.status} title={goal.goal} currency={goal.currency} />)}
            </View>
        </View>
    )
}

export default Goals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.cloud
    },
    titleText: {
        fontSize: FontSize.SectionTitle,
        color: Colors.primary,
        fontWeight: '900',
        paddingHorizontal: Spacing.general * 2
    }
})
