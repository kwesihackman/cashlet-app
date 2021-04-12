export interface IGoal {
    goal: string,
    currency: string,
    funds: string,
    status: string
}
export const GoalsData: IGoal[] = [
    {
        goal: 'Goal 1',
        currency: 'KES',
        funds: '12,000',
        status: 'Finish Goal'
    },
    {
        goal: 'Goal 2',
        currency: 'KES',
        funds: '12,000',
        status: 'Finish Goal'
    },

]

export const StaticText = {
    toastFullText: "This is an in-app notification snackbar to show the user when they perform an action. Clicking it should change the text.",
    toastShotText: "User clicked snackbar"
}