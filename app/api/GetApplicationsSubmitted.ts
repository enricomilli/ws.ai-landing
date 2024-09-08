import { ApplicationsSubmittedResponse } from "@/types/api"

export default async function GetApplicationsSubmitted(): Promise<number> {

  let url = ""

  if (import.meta.env.PROD) {
    url = 'https://host.worksync.ai/api/applications-submitted'
  } else {
    url = "http://localhost:8080/api/applications-submitted"
  }

  const response = await fetch(url)

  const data: ApplicationsSubmittedResponse = await response.json()
  console.log(data)

  return data.totalApplications
}
