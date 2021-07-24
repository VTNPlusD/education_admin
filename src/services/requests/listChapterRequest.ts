const listChapterRequest = (page: number, limit: number, subjectId: string) => {
  return {
    page,
    limit,
    condition: `subjects.id = ${subjectId}`,
    orderBy: 'chapters.order',
    orderDirection: 'DESC' as const
  }
}
export { listChapterRequest }
