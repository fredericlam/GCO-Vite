<?php 

  // try to generate feed if not exists or out to date (1 day)
  generatePubMedJsonFeed();

  /**
  * @desc: Script making a cache json/xml file  
  * @author: lamf
  */

  function generatePubMedJsonFeed()
  {
    // urls
    $search_url   = "https://www.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi" ; 
    $summary_url  = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi" ; 
    $json_feed    = $_SERVER['DOCUMENT_ROOT'] . "/data/recent_pub.json" ; 
    $rss_feed    = $_SERVER['DOCUMENT_ROOT'] . "/data/recent_pub_rss.xml" ; 

    // args
    $db       = 'pubmed' ; 
    $terms      = 'Cancer+Surveillance%5BAD%5D+AND+(international+agency+for+research+on+cancer%5BCN%5D+OR+iarc%5BCN%5D+OR+international+agency+for+research+on+cancer%5BAD%5D+OR+iarc%5BAD%5D)'; 

      // first, get list of ids publications
    $search_query   = "$search_url?db=$db&term=$terms" ; 


    // check whether the file exists, and if cache is > 24h
    if ( file_exists( $json_feed )) 
    {
      // "Y-m-d H:i:s" | "F d Y H:i:s."
      $json_last_generate_f = new DateTime( date( "F d Y H:i:s." , filemtime( $json_feed ) ) ); 

      $dteStart = new DateTime( date( "Y-m-d H:i:s" , filemtime( $json_feed ) ) ); 
      $dteEnd   = new DateTime( date( "Y-m-d H:i:s") );

      $dteDiff  = $dteStart->diff($dteEnd);

      $nb_days = $dteDiff->format('%D') ;
      //$nb_hours = $dteDiff->format('%h') ;

      if ( $nb_days < 1 ) 
      {
        return ; //exit( "Feed is still up-to-date ") ; 
      }
    }
     

    // SimpleXmlMode
    $feed_search  = file_get_contents( $search_query );
    $xml_search   = new SimpleXMLElement( $feed_search );
    $Ids      = [] ; 

    if( isset( $xml_search->IdList) )
    {
      foreach( $xml_search->IdList as $node )
      {
        $Ids = (array)$node->Id ;
      }
    } 

    if ( count( $Ids) > 0 )
    {
      // then, launch summary 
      $summary_query  = "$summary_url?db=$db&id=".implode(',',$Ids) ; 
      // exit($summary_query) ; 

      $feed_summary   = file_get_contents( $summary_query );
      $xml_summary  = new SimpleXMLElement( $feed_summary );

      $recent_pub   = [ "articles" => [] ] ; 

      if( isset( $xml_summary->DocSum) )
      {
        foreach( $xml_summary->DocSum as $node )
        { 
          // date format
          $date_tmp = ( (string)$node->Item[1] != '' ) ? (string)$node->Item[1] : (string)$node->Item[0] ; 
          @list( $year , $month , $day )  = explode(' ', $date_tmp) ; 
          $day_m = $day ; 

          if ( $day_m == '') $day_m = 1 ; 
          // $str_dates = ['Mon','Tue','Wed','Thr','Fri','Sat','Sun'] ; 

          $publication = [
            'pmid'  => (string)$node->Id , 
            'title' => (string)$node->Item[5],
            'date'  => "$day $month $year", 
            'date_rss' => "$day_m $month $year 00:00:00 GMT",
            'date_sort' => "$day_m/$month/$year"
          ] ; 

          array_push( $recent_pub["articles"] , $publication ) ; 
        }
      } // end if 

      usort( $recent_pub["articles"] , function ($a, $b,$i="date_sort")  {

        $t1 = strtotime(str_replace('/', '-', $a[$i]));
        $t2 = strtotime(str_replace('/', '-', $b[$i]));

        return $t1 < $t2;
      }); 

      // var_dump( $recent_pub["articles"]) ; 

      $fp = fopen( $json_feed , 'w+');
      fwrite($fp, json_encode($recent_pub) );
      fclose($fp);

      // generate rss feed
      $rss_content = "<?xml version='1.0' encoding='UTF-8'?>\n";
      $rss_content .= "<rss xmlns:atom='http://www.w3.org/2005/Atom' xmlns:content='http://purl.org/rss/1.0/modules/content/' version='2.0'>\n" ; 
      $rss_content .= "<channel>\n";

      $rss_content .=  "<title>IARC - CSU recent publications</title>\n";
      $rss_content .=  "<description>Articles recently published at PubMed.</description>\n";
      $rss_content .=  "<link>https://www.iarc.fr</link>\n";
      $rss_content .=  "<language>en</language>\n";
      $rss_content .=  "<lastBuildDate>".date('D, d M Y H:i:s O')."</lastBuildDate>\n";

      foreach( $recent_pub["articles"] as $article )
      {
        $rss_content .= "<item>\n";
        $rss_content .= "<title>{$article['title']}</title>\n";
        $rss_content .= "<pubDate>{$article['date_rss']}</pubDate>\n";
        $rss_content .= "<link>https://www.ncbi.nlm.nih.gov/pubmed/{$article['pmid']}</link>\n";
        $rss_content .= "<guid>https://www.ncbi.nlm.nih.gov/pubmed/{$article['pmid']}</guid>\n";
        // $rss_content .= "<atom:link href='https://www.ncbi.nlm.nih.gov/pubmed/{$article['pmid']}' rel='self' type='application/rss+xml'>\n";
        $rss_content .= "</item>\n";
      }

      $rss_content .= "</channel>\n";
      $rss_content .= "</rss>\n";

      $fp_rss = fopen( $rss_feed , 'w+');
      fwrite($fp_rss, $rss_content );
      fclose($fp_rss);

      // exit( "Feed has been re-generated") ; 
      $info = "Feed has been re-generated" ;
      //echo '<script type="text/javascript">console.info("Json feed","'+$info+'");</script>' ;
    }

    else
    {
      $error = "Error, no CSU publication for this query $search_query"  ; 
      //echo '<script type="text/javascript">console.error("Error occured","'+$error+'");</script>' ;
    }
  }

?>
