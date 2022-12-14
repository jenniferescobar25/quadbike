package dto;

import com.jenne.quadbike.entity.Client;

/**
 *
 * @author jenn2
 */
public class CountClient {
    private Long total;
    private Client client;

    /**
     * @return the total
     */
    public Long getTotal() {
        return total;
    }

    /**
     * @param total the total to set
     */
    public void setTotal(Long total) {
        this.total = total;
    }

    /**
     * @return the client
     */
    public Client getClient() {
        return client;
    }

    /**
     * @param client the client to set
     */
    public void setClient(Client client) {
        this.client = client;
    }

    public CountClient() {
    }

    public CountClient(Long total, Client client) {
        this.total = total;
        this.client = client;
    }
}