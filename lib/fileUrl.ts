import { client } from "@/sanity/lib/client";

export function fileUrl(source: any): string {
  if (!source?.asset?._ref) {
    return '';
  }
  
  return client.config().projectId && client.config().dataset
    ? `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${source.asset._ref.replace('file-', '').replace('-pdf', '.pdf')}`
    : '';
}