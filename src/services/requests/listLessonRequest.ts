const listLessonRequest = (
  chapterId: string,
  page?: number,
  limit?: number
) => {
  return {
    page,
    limit,
    condition: `chapters.id = ${chapterId}`,
    orderBy: 'chapters.order',
    orderDirection: 'DESC' as const
  }
}
export { listLessonRequest }
