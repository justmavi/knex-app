import Model from '@models/Model';

export default class Employee extends Model<number> {
  public profileId: number;
  public weekPosts: number;
  public weekAnswers: number;
  public allPosts: number;
  public allAnswers: number;
  public topPostsPerWeek: number;
  public topAnswersPerWeek: number;
  public createdAt: Date;
}
